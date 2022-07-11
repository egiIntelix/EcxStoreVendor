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
]
const FORM_NAME = 'FORM_LOGIN';

export { INPUT_LIST, FORM_NAME }