import notifee, { AndroidImportance, AuthorizationStatus, Event, EventType, TimestampTrigger, TriggerType } from '@notifee/react-native';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { AppState, AppStateStatus, Platform, PermissionsAndroid } from 'react-native';
import message from '@react-native-firebase/messaging'
import { ServiceSecure, ServiceStorage } from '@app-services';
import _, { remove, uniqBy } from 'lodash';
import { KEY_STORAGE } from './service-storage';
import { getCurrentRoute, navigate, } from '@app-navigation/navigation-services';

const TOPIC_ALL_USERS = 'all_users';
class ServiceNotification {
    private current_state: AppStateStatus = AppState.currentState || 'active';

    private current_tx_no = '';
    private data_notification: FirebaseMessagingTypes.RemoteMessage['data'] | null = null;
    private has_notification: boolean = false;
    private topic = '';
    private is_active = false;
    private address_subs: string[] = [];

    public async requestUserPermission() {
        // if (Platform.OS === 'android') {
        //     PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
        //     return
        // }
        const settings = await notifee.requestPermission();

        if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {

            return true
        } else {
            return false
        }
    }

    public listenMessage() {
        // this.createAndroidTopicChannel();
        message().onMessage(this.onMessage);
        message().onNotificationOpenedApp(this.onNotificationOpenedApp);
        message().setBackgroundMessageHandler(() => new Promise<void>((resolve) => resolve()))
        this.getInitialNotification();
        notifee.onForegroundEvent(this.onForegroundEventNotifee);
        notifee.onBackgroundEvent(this.onBackgroundEventNotifee);
        AppState.addEventListener('change', this.handleAppState);
    }


    public setCurrentTxNo = (current_tx_no: string) => {
        this.current_tx_no = current_tx_no;
    };

    public getCurrentTxNo = () => {
        return this.current_tx_no;
    };

    public showNotification = async (params: { title: string; body: string; data?: any }) => {
        if (Platform.OS === 'android') {
            const channel_id = await notifee.createChannel({
                id: 'default',
                name: 'Default Channel',
            });

            return notifee.displayNotification({
                title: params.title,
                body: params.body,
                data: params.data,
                android: {
                    channelId: channel_id,
                },
            });
        }

        if (Platform.OS === 'ios') {
            return notifee.displayNotification({
                title: params.title,
                body: params.body,
                data: params.data,
            });
        }
    };




    public setScheduleNotification = async (params: {
        id: string;
        title: string;
        body: string;
        data?: any;
        time: number;
    }) => {
        const tringger: TimestampTrigger = {
            type: TriggerType.TIMESTAMP,
            timestamp: params.time,
            alarmManager: {
                allowWhileIdle: true,
            },
        };

        if (Platform.OS === 'android') {
            const channel_id = await notifee.createChannel({
                id: 'default',
                name: 'Default Channel',
            });

            await notifee.createTriggerNotification(
                {
                    id: params.id,
                    title: params.title,
                    body: params.body,
                    data: params.data,
                    android: {
                        channelId: channel_id,
                    },
                },
                tringger,
            );
        }

        if (Platform.OS === 'ios') {
            await notifee.createTriggerNotification(
                {
                    id: params.id,
                    title: params.title,
                    body: params.body,
                    data: params.data,
                },
                tringger,
            );
        }
    };

    public removeNotification = async (id: string, tag?: string) => {
        return notifee.cancelNotification(id, tag);
    };







    private onMessage: Parameters<FirebaseMessagingTypes.Module['onMessage']>[0] = (remoteMessage) => {
        if (remoteMessage.data && !remoteMessage.data.payload) {
            this.showNotification({
                title: remoteMessage?.notification?.title || '',
                body: remoteMessage?.notification?.body || '',
                data: remoteMessage.data,
            });
        }

        this.handleMessageData(remoteMessage.data, true);
    };

    private onNotificationOpenedApp: Parameters<FirebaseMessagingTypes.Module['onNotificationOpenedApp']>[0] = (
        remoteMessage,
    ) => {
        this.has_notification = true;
        this.handleMessageData(remoteMessage.data);
    };

    private handleAppState: (state: AppStateStatus) => void = (state) => {
        if (state !== 'active') {
            this.has_notification = false;
        }

        if (this.current_state === 'background' && state === 'active' && !this.is_active) {
            this.is_active = true;
        }

        this.current_state = state;
    };



    private onForegroundEventNotifee = (event: Event) => {
        if (event.detail && event.type === EventType.PRESS) {
            this.has_notification = true;
            this.handleMessageData(event.detail.notification?.data as any);
        }
    };

    private onBackgroundEventNotifee = async (event: Event) => {
        const message_data: any = event.detail.notification?.data;

    };


    private getInitialNotification = () => {
        message()
            .getInitialNotification()
            .then((initialMessage) => {
                if (!initialMessage) {
                    if (AppState.currentState === 'active') {
                        // ServiceHubIncome.requestPaymentPending();
                    }
                    return;
                }

                this.handleMessageData(initialMessage.data);
            })
    };

    private createAndroidTopicChannel = () => {
        notifee.createChannel({
            id: 'topic_channel',
            name: 'Topic Channel',
            importance: AndroidImportance.HIGH,
        });
    };

    private handleMessageData = async (
        message_data?: FirebaseMessagingTypes.RemoteMessage['data'],
        opened?: boolean,
    ) => {
        if (message_data?.tx_no) {
            try {
                this.data_notification = message_data;

            } catch (error) { }
        } else {

        }
    };
}

export default new ServiceNotification()