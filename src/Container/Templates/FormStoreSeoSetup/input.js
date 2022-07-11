const INPUT_LIST = [
    {
        name: 'JudulSeo',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Judul Seo',
        },
        controllerProps: {}
    },
    {
        name: 'DeskripsiMeta',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Deskripsi Meta',
        },
        controllerProps: {}
    },
    {
        name: 'KataKunciMeta',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Kata Kunci Meta',
            numberOfLines: 3,
        },
        controllerProps: {}
    },
    {
        name: 'JudulFacebook',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Judul Facebook',
        },
        controllerProps: {}
    },
    {
        name: 'DeskripsiFacebook',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Deskripsi Facebook',
            numberOfLines: 3,
        },
        controllerProps: {}
    },
    {
        name: 'gambarFacebook',
        value: '',
        type: 'camera',
        inputProps: {
            label: 'Gambar Facebook',
            description: 'Masukkan gambar Facebook tokomu',
            maxLength: 1,
        },
        controllerProps: {}
    },
    {
        name: 'JudulTwitter',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Judul Twitter',
        },
        controllerProps: {}
    },
    {
        name: 'DeskripsiTwitter',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Deskripsi Twitter',
            numberOfLines: 3,
        },
        controllerProps: {}
    },
    {
        name: 'gambarTwitter',
        value: '',
        type: 'camera',
        inputProps: {
            label: 'Gambar Twitter',
            description: 'Masukkan gambar Twitter tokomu',
            maxLength: 1,
        },
        controllerProps: {}
    },
]
const FORM_NAME = 'FORM_STORE_SEO_SETUP';

export { INPUT_LIST, FORM_NAME }