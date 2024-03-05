import { ServiceStorage } from '@app-services';
import remoteConfig from '@react-native-firebase/remote-config';
import { find, reduce } from 'lodash';
import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info';
import { KEY_STORAGE } from './service-storage';

export interface ShortCut {
    id: string;
    status: 'enable' | 'disable' | 'testing';
    testing: string;
    platform: string;
}



export interface HomeBottomTabs {
    id: string;
    enable: boolean;
    platform: string;
}

const default_home_tabs = [
    {
        id: 'Product',
        enable: true, platform: ''

    },
    {
        id: 'Wholesale',
        enable: true, platform: ''

    },
    {
        id: 'Home',
        enable: true, platform: ''

    },
    {
        id: 'News',
        enable: true, platform: ''
    },
    {
        id: 'Account',
        enable: true, platform: ''
    },
]
const default_product_remote: ShortCut[] = [
    {
        id: 'buy_now',
        status: 'enable',
        testing: '',
        platform: '',
    },

]

const default_login_remote: ShortCut[] = [
    {
        id: 'google',
        status: 'disable',
        testing: '',
        platform: '',
    },
    {
        id: 'apple',
        status: 'disable',
        testing: '',
        platform: '',
    },
    {
        id: 'facebook',
        status: 'disable',
        testing: '',
        platform: '',
    },
]

const default_home_page_remote: ShortCut[] = [
    {
        id: 'language',
        status: 'disable',
        testing: '',
        platform: '',
    },

]

class ServiceRemoteConfig {
    private home_bottom_tabs: HomeBottomTabs[] = default_home_tabs;
    private product_details: ShortCut[] = default_product_remote
    private home_page: ShortCut[] = default_home_page_remote
    private login_page: ShortCut[] = default_login_remote

    public fetchRemoteConfig() {
        return new Promise<void>(async (resolve) => {
            try {
                await remoteConfig().setConfigSettings({
                    minimumFetchIntervalMillis: 10000,
                });
                await remoteConfig().fetchAndActivate();
                const home_bottom_tabs = remoteConfig().getValue('bottom_tabs');
                const product_details = remoteConfig().getValue("product_details")
                const home_page = remoteConfig().getValue("home_page")
                const login_page = remoteConfig().getValue("login_page")
                if (home_bottom_tabs && home_bottom_tabs.asString()) {
                    this.home_bottom_tabs = JSON.parse(home_bottom_tabs.asString());
                    ServiceStorage.setObject(KEY_STORAGE.HOME_BOTTOM_TABS, this.home_bottom_tabs);
                }
                if (product_details && product_details.asString()) {
                    this.product_details = JSON.parse(product_details.asString());
                }
                if (home_page && home_page.asString()) {
                    this.home_page = JSON.parse(home_page.asString());
                }
                if (login_page && login_page.asString()) {
                    this.login_page = JSON.parse(login_page.asString());
                }
                resolve();
            } catch (err) {
                resolve();
            }
        });
    }

    public getHomeBottomTabs() {
        return this.home_bottom_tabs;
    }

    public getProductDetailsRemote() {
        return this.product_details;
    }
    public getHomePageRemote() {
        return this.home_page;
    }
    public getLoginPageRemote() {
        return this.login_page;
    }
    public checkProductDetailsEvents(id: string) {
        return this.checkShortCut(this.product_details, id, default_product_remote);
    }

    public checkHomePageEvents(id: string) {
        return this.checkShortCut(this.home_page, id, default_home_page_remote);
    }

    public checkLoginPageEvents(id: string) {
        return this.checkShortCut(this.login_page, id, default_home_page_remote);
    }

    private checkShortCut = (short_cuts: ShortCut[], id: string, default_value: ShortCut[]) => {
        let short_cut = find(short_cuts, ['id', id]);
      
        if (!short_cut) {
            return false
        }

        if (short_cut && !short_cut?.platform) {
            return this.checkItem(short_cut);
        }

        const check_platform = reduce(
            short_cut.platform.split(','),
            (arr: string[], value) => {
                arr.push(value.trim());
                return arr;
            },
            [],
        ).includes(Platform.OS);

        if (check_platform) {
            return this.checkItem(short_cut);
        } else {
            short_cut = find(default_value, ['id', id]);
            if (!short_cut) {
                return false
            }
            return this.checkItem(short_cut);
        }
    };

    private checkItem = (short_cut: ShortCut) => {
        if (short_cut && short_cut.status === 'enable') {
            return true;
        } else if (short_cut && short_cut.status === 'testing') {
            const testing_ab = short_cut.testing.split(',');

            if (
                testing_ab.findIndex(
                    (device) =>
                        device.trim().toLocaleLowerCase() ===
                        DeviceInfo.getDeviceId()
                ) >= 0
            ) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    };
}

export default new ServiceRemoteConfig();