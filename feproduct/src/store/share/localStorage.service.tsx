import * as _ from 'lodash';

export type LocalStorageItem = {
    key: string;
    value: string | number;
};

export enum LocalStorageKey {
    token = '_token',
    user = '_uid',
    tokenExpired = '_expired',
    tnb = '_tnb',
    room = '_room',
    eye = '_eye',
    defaultType = '_default',
    screenType = '_screen',
    callRoomsList = '_listRoom',
    groupCode = '_group',
    ultraSound = '_ultraSound',
}

export class LocalStorageService {
    public _value: any;
    public _key: any;
    public initValue: any;

    set value(newValue: any) {
        this._value = newValue;
    }

    set key(newkey: string) {
        this._key = newkey;
    }

    get value() {
        return this._value;
    }

    get key() {
        return this._key;
    }

    constructor(initValue?: any) {
        this.initValue = initValue;
    }

    public setItem({ key, value }: LocalStorageItem): LocalStorageService {
        localStorage.setItem(key, JSON.stringify(value));
        return this;
    }

    public getItem(key: string): string | null {
        const value: any = localStorage.getItem(key);
        if (_.isEmpty(value) || value === 'undefined') return null;
        return JSON.parse(value);
    }

    public removeItem(key: LocalStorageKey): LocalStorageService {
        localStorage.removeItem(key);
        return this;
    }

    static clear() {
        localStorage.clear();
    }

    public setMultipleItem(listItem: LocalStorageItem[]): LocalStorageService {
        if (listItem.length) {
            listItem.forEach((item: LocalStorageItem) => {
                this.setItem({ ...item });
            });
        }
        return this;
    }

    public setLocalUser(user: any): this {
        const listLocalStorageItem: LocalStorageItem[] = [];
        listLocalStorageItem.push({
            key: LocalStorageKey.token,
            value: _.get(user, 'token'),
        });
        listLocalStorageItem.push({
            key: LocalStorageKey.user,
            value: _.get(user, 'id'),
        });
        const expiredDev: number = new Date().getTime() + 180000;
        const expiredProd: number = new Date(+new Date() + 86400000).getTime();
        listLocalStorageItem.push({
            key: LocalStorageKey.tokenExpired,
            value: expiredProd,
        });
        this.setMultipleItem(listLocalStorageItem);
        return this;
    }

    public expiredToken(tokenExpiredTime: number): boolean {
        if (tokenExpiredTime) {
            return +tokenExpiredTime < new Date().getTime();
        }
        return false;
    }
}