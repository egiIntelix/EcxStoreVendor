import React, { forwardRef, memo, useImperativeHandle, useState } from 'react';
import { Modal, View } from 'react-native';
import { useTheme, TextInput } from 'react-native-paper';
import { HeaderModal, FormInputs } from '@Molecules';
import { Forms } from '@Organisms';
import { log } from '@Utils';

import styles from './styles';
export default memo(forwardRef((props, ref) => {
    const { colors } = useTheme();
    const [dataProduct, setDataProduct] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    useImperativeHandle(ref, () => ({
        toggle: (data = {}) => {
            setDataProduct(data);
            setModalVisible(prevState => !prevState)
        },
        setVisible: () => {
            setModalVisible(prevState => !prevState)
        }
    }));

    const FORM_NAME = "FORM_MODAL_UBAH_HARGA";
    const INPUT_LIST = [
        {
            name: 'price',
            value: "",
            type: 'text',
            inputProps: {
                resetButton: true,
                left: (defaultColor) => <TextInput.Icon
                    color={colors.darkGray}
                    name="currency-inr"
                    size={25}
                />
            },
            controllerProps: {}
        },
    ]
    return (
        <Modal
            animationType={"fade"}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}
            hardwareAccelerated={true}>
            <View style={styles.container}>
                <View style={styles.innerContainer(colors.white)}>
                    <HeaderModal title="Atur Harga" onPress={() => setModalVisible(false)} />
                    <Forms
                        formname={FORM_NAME}
                        inputList={INPUT_LIST}
                        defaultValue={dataProduct?.price && { price: dataProduct?.price } || {}}
                        autoClear={false}
                        renderButton={(isValid, reset, handleSubmit) =>
                            <FormInputs.CustomButton
                                onSubmit={handleSubmit}
                                disabled={false}
                                submitLabel={"Simpan"} />

                        }
                        onFormSubmit={({ serialized }) => props.onSave({ ...dataProduct, ...serialized })}
                    />
                </View>
            </View>
        </Modal>
    )

}));