import EventEmitter from 'events';
import { Socket } from 'socket.io-client';
import { socket } from './service-socket';
import { string } from 'yup';

export enum EEventSocketChat {
    EVENT_SETUP = 'set-up',
    EVENT_JOIN_ROOM = 'join-room',
    EVENT_LEAVE_ROOM = 'leave-room',
    EVENT_SEND_MESSAGE = 'send-message',
    EVENT_RECEIVE_MESSAGE = 'receive-message',
    EVENT_TYPING_MESSAGE = 'typing-message',
    EVENT_STOP_TYPING_MESSAGE = 'stop-typing-message',
    RE_CONNECT = "RE_CONNECT"
}

class ServiceMessage extends EventEmitter {
    private socket_message: Socket | null = null;
    private room_message?: string

    public listener(room: string) {
        return new Promise<void>(async (resolve, reject) => {
            this.removeSocket()
            try {
                this.socket_message = await socket().main_socket();
                const timer = setInterval(async () => {
                    try {
                        if (!this.socket_message) {

                            await this.listener(room);
                        } else {

                            clearInterval(timer);
                        }
                    } catch (err) { }
                }, 500);

                if (this?.socket_message) {
                    this.socket_message.on('connect', () => {
                        this.socket_message && this.socket_message.on('connect-server', () => {
                            clearInterval(timer);
                            this.socket_message && this.socket_message.emit(
                                'join_room',
                                room,
                            )
                            this.room_message = room
                            this.socket_message?.on(EEventSocketChat.EVENT_RECEIVE_MESSAGE, this.userReceivedMessage.bind(this))
                        });
                    });
                    this.socket_message.on('disconnect', () => {
                        this.emit(EEventSocketChat.RE_CONNECT);
                        this.socket_message?.connect();
                    });
                }
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

    public getSocket() {
        return this.socket_message;
    }

    public removeSocket() {
        if (this.socket_message) {
            this.socket_message.removeAllListeners();
            this.socket_message.disconnect();
            this.socket_message = null;
        }
    }

    public onMessage(event: EEventSocketChat, listener: (...args: any[]) => void): Promise<this> {
        return new Promise<this>(async (resolve, reject) => {
            try {
                if (!this.socket_message || !this.socket_message.connected) {
                    if (this.room_message) {
                        await this.listener(this.room_message);
                    }
                }
                resolve(this.on(event, listener));
            } catch (error) {
                reject(error);
            }
        });
    }

    public userReceivedMessage = (data?: any) => {
        this.emit(EEventSocketChat.EVENT_RECEIVE_MESSAGE, data)
    }

    public userSendMessage = (data: string) => {
        this.socket_message?.emit(EEventSocketChat.EVENT_SEND_MESSAGE, data)
    }

    private getListener(event: EEventSocketChat) {
        let listen_event;
        switch (event) {
            case EEventSocketChat.EVENT_RECEIVE_MESSAGE:
                listen_event = this.userReceivedMessage.bind(this);
                break;
        }
        return listen_event;
    }
}

export default new ServiceMessage();
