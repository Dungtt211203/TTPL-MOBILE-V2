import io from 'socket.io-client';
import * as SocketIOClient from 'socket.io-client'; // Thêm dòng import này

const SOCKET_URL = 'https://ngantuanphat.vugiasoftware.com/message'; // URL của máy chủ socket
const SOCKET_PATH = '/socket-io'; // Path của socket

class SocketService {
  private socket: SocketIOClient.Socket | null;
  private messageCallback: ((data: any) => void) | null;

  constructor() {
    this.socket = null;
    this.messageCallback = null;
  }

  setMessageCallback(callback: (data: any) => void) {
    this.messageCallback = callback;
  }

  connect() {
    this.socket = io(SOCKET_URL, {path: SOCKET_PATH});

    this.socket.on('connect', () => {
      console.log('Socket connected');
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    // Xử lý các sự kiện từ máy chủ, ví dụ:
    this.socket.on('message', (data: any) => {
      console.log('Received message:', data);
      if (this.messageCallback) {
        this.messageCallback(data); // Gọi callback khi nhận được tin nhắn
      }
    });
  }

  sendMessage(message: string) {
    if (this.socket && this.socket.connected) {
      this.socket.emit('message', message);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

const socketService = new SocketService();
export default socketService;
