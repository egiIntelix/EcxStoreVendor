import { SESSION } from '../types';
const SessionSchema = {
    name: SESSION,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        auth_token : 'string',
        user_id : 'string',
        user_login : 'string',
        user_nicename : 'string',
        user_email : 'string',
        display_name : 'string',
        roles : 'string',
        avatar : 'string',
        date_created : 'string',
        billing : 'string',
        shipping : 'string',
        store_name : 'string',
        store_address : 'string',
        store_description : 'string',
        billing_first_name : 'string',
        billing_last_name : 'string',
        billing_address_1 : 'string',
        billing_city : 'string',
        billing_state : 'string',
        billing_postcode : 'string',
        billing_country : 'string',
        billing_email : 'string',
        billing_phone : 'string',
        shipping_first_name : 'string',
        shipping_last_name : 'string',
        shipping_address_1 : 'string',
        shipping_city : 'string',
        shipping_state : 'string',
        shipping_postcode : 'string',
        shipping_country : 'string',
    },
};

export const migrationSession = (oldRealm, newRealm) => {
    const oldObjects = oldRealm.objects(SESSION);
    const newObjects = newRealm.objects(SESSION);
    for (const objectIndex in oldObjects) {
        const oldObject = oldObjects[objectIndex];
        const newObject = newObjects[objectIndex];
        for (let key in SessionSchema.properties) {
            newObject[key] = oldObject[key];
        }
    }
};

export default SessionSchema;
