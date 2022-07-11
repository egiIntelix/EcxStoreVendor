import { log } from '@Utils';
let region = {
    provinsi: require('./propinsi.json'),
    kabupaten: require('./kabupaten.json'),
    kecamatan: require('./kecamatan.json'),
    kelurahan: require('./kelurahan.json'),
}

const regionCreator = async (level = 0, parent_code = '') => {
    if (level > 3) return [];
    let key = (level == 0 ? 'provinsi' : (level == 1 ? 'kabupaten' : (level == 2 ? 'kecamatan' : 'kelurahan')));
    return level == 0 ? await region[key] : await region[key].filter(({ parentCode }) => parentCode == parent_code);
}

export default region;
export {
    regionCreator,
}