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
    const FORM_NAME = "FORM_MODAL_UBAH_STOK";
    const INPUT_LIST = [
        {
            name: 'stock_quantity',
            value: "",
            type: 'counter',
            inputProps: {
                label: 'Jumlah Stok',
                inline: true,
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
                    <HeaderModal title="Atur Stok" onPress={() => setModalVisible(false)} />
                    <Forms
                        formname={FORM_NAME}
                        inputList={INPUT_LIST}
                        defaultValue={dataProduct?.stock_quantity && {stock_quantity: dataProduct?.stock_quantity} || {}}
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