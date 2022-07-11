
import moment from 'moment';
import { Encrypt, Decrypt } from '../Encryption/';
import { log } from '../Consoles';
// import { fetch } from 'react-native-ssl-pinning';


const baseURL = 'https://app74.ecentrix.net/ecx_store_api/';
const _transformRequest = (data) => {
    data.timezone = moment().utcOffset();
    data.timestamp = moment().format('x');
    log(data);
    let params = new FormData();
    params.append('msg', Encrypt(data));
    return JSON.stringify(params);
};
const POST = async (...params) => {
    let [url, data] = params;
    return new Promise((resolve, reject) => {
        fetch(baseURL + url, {
            method: 'POST',
            body: _transformRequest(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                let decrypted = Decrypt(responseJson);
                resolve(JSON.parse(decrypted));
            })
            .catch(err => {

                log(url, `error ${err}`);
                reject(err);
            });
    });
};
export { POST };
