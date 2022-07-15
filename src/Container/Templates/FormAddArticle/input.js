const INPUT_LIST = [
    {
        name: 'JudulArtikel',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Judul Artikel',
        },
        controllerProps: {}
    },
    {
        name: 'DeskripsiSingkat',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Deskripsi Singkat',
            numberOfLines: 3,
        },
        controllerProps: {}
    },
    {
        name: 'gambarArtikel',
        value: '',
        type: 'camera',
        inputProps: {
            label: 'GambarArtikel',
            description: 'Masukkan gambar',
            maxLength: 1,
        },
        controllerProps: {}
    },
    {
        name: 'Deskripsi',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Deskripsi',
            numberOfLines: 3,
        },
        controllerProps: {}
    },
]
const FORM_NAME = 'FORM_ADD_ARTICLE';

export { INPUT_LIST, FORM_NAME }