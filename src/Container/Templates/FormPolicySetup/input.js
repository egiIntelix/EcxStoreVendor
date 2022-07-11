const INPUT_LIST = [
    {
        name: 'LabelKebijakan',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Label Tab Kebijakan Toko',
        },
        controllerProps: {}
    },
    {
        name: 'KebijakanPengiriman',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Kebijakan Pengiriman',
            numberOfLines: 3,
        },
        controllerProps: {}
    },
    {
        name: 'KebijakanPengembalianDana',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Kebijakan Pengembalian Dana',
            numberOfLines: 3,
        },
        controllerProps: {}
    },
    {
        name: 'KebijakanPembatalan',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Kebijakan Pembatalan/Pengembalian/Penukaran Produk',
            numberOfLines: 3,
        },
        controllerProps: {}
    },
]
const FORM_NAME = 'FORM_POLICY_SETUP';

export { INPUT_LIST, FORM_NAME }