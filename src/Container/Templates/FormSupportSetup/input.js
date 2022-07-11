const INPUT_LIST = [
    {
        name: 'SupportTelepon',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Telepon',
        },
        controllerProps: {}
    },
    {
        name: 'SupportSurel',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Surel',
        },
        controllerProps: {}
    },
    {
        name: 'SupportAlamat1',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Alamat1',
        },
        controllerProps: {}
    },
    {
        name: 'SupportAlamat2',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Alamat2',
        },
        controllerProps: {}
    },
    {
        name: 'SupportNegara',
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
        name: 'SupportKota',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Kota',
        },
        controllerProps: {}
    },
    {
        name: 'SupportProvinsi',
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
        name: 'SupportKodePos',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Kode Pos',
        },
        controllerProps: {}
    },
]
const FORM_NAME = 'FORM_SUPPORT_SETUP';

export { INPUT_LIST, FORM_NAME }