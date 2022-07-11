const INPUT_LIST = [
    {
        name: 'logoToko',
        value: '',
        type: 'camera',
        inputProps: {
            label: 'Logo Toko',
            description: 'Masukkan logo tokomu',
            maxLength: 1,
        },
        controllerProps: {}
    },
    {
        name: 'bannerToko',
        value: '',
        type: 'camera',
        inputProps: {
            label: 'Banner Toko',
            description: 'Masukkan banner tokomu',
            maxLength: 1,
        },
        controllerProps: {}
    },
    {
        name: 'NamaToko',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Nama Toko',
        },
        controllerProps: {}
    },
    {
        name: 'EmailToko',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Email Toko',
        },
        controllerProps: {}
    },
    {
        name: 'Telepon',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Telepon',
        },
        controllerProps: {}
    },
    {
        name: 'Alamat1',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Alamat1',
        },
        controllerProps: {}
    },
    {
        name: 'Alamat2',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Alamat2',
        },
        controllerProps: {}
    },
    {
        name: 'Kota',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Kota',
        },
        controllerProps: {}
    },
    {
        name: 'KodePos',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Kode Pos',
        },
        controllerProps: {}
    },
    {
        name: 'Provinsi',
        value: '',
        type: 'dropdown',
        config: {
            data: [
                {code: 'JB', description:'Jawa Barat'}
            ]
        },
        inputProps: {
            label: 'Provinsi',
        },
        controllerProps: {}
    },
    {
        name: 'Negara',
        value: '',
        type: 'dropdown',
        config: {
            data: [
                {code: 'ID', description:'Indonesia'}
            ]
        },
        inputProps: {
            label: 'Negara',
        },
        controllerProps: {}
    },
    {
        name: 'DeskripsiToko',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Deskripsi Toko',
            numberOfLines: 3,
        },
        controllerProps: {}
    },
]
const FORM_NAME = 'FORM_STORE_SETUP';

export { INPUT_LIST, FORM_NAME }