const INPUT_LIST = [
    {
        name: 'Email',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Email',
        },
        controllerProps: {
            rules: {
                required: {
                    value: true,
                    message: `Email harus diisi.`
                },
            }
        }
    },
    {
        name: 'NamaToko',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Nama Toko',
        },
        controllerProps: {
            rules: {
                required: {
                    value: true,
                    message: `Nama Toko harus diisi.`
                },
            }
        }
    },
    {
        name: 'KataSandi',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Kata Sandi',
            secureText: true,
        },
        controllerProps: {
            rules: {
                required: {
                    value: true,
                    message: `Kata Sandi harus diisi.`
                },
            }
        }
    },
    {
        name: 'KonfKataSandi',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Konfirmasi Kata Sandi',
            secureText: true,
        },
        controllerProps: {
            rules: {
                required: {
                    value: true,
                    message: `Konfirmasi Kata Sandi harus diisi.`
                },
            }
        }
    },
]
const FORM_NAME = 'FORM_DAFTAR';

export { INPUT_LIST, FORM_NAME }