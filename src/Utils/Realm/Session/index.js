import Realm from 'realm';
import { dbOptions } from '../dbOptions';
import { SESSION } from '../types';

export const insertSession = (data) => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        realm.write(() => {
            let obj = realm.objects(SESSION);
            if (typeof (obj) !== 'undefined') {
                realm.delete(obj);
            }
            Object.keys(data).map((key, index) => { data[key] = data[key] === null ? '' : data[key]; });
            realm.create(SESSION, data);
            resolve(data);
        });
    }).catch((error) => {
        reject(`insertSession error : ${error.message}`);
    });
});

export const selectSession = (filter = '') => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        let data = filter ? realm.objects(SESSION).filtered(filter) : realm.objects(SESSION);
        resolve(data);
    }).catch((error) => {
        reject(`selectSession error : ${error.message}`);
    });
});


export const deleteSession = () => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        realm.write(() => {
            let obj = realm.objects(SESSION);
            if (typeof (obj) === 'undefined') {
                resolve(false);
            } else {
                realm.delete(obj);
                resolve(true);
            }
        });
    }).catch((error) => {
        reject(`deleteSession error : ${error.message}`);
    });
});


export const updateSession = (obj) => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        realm.write(() => {
            let objData = realm.objects(SESSION).filtered('_id == 1234')[0];
            Object.keys(obj).map((key, index) => {
                objData[key] = obj[key];
            });
            resolve(objData);
        });
    }).catch((error) => {
        reject(`updateSession error : ${error.message}`);
    });
});