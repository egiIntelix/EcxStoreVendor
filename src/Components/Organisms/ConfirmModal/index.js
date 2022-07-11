import React, { forwardRef, memo, useImperativeHandle, useState } from 'react';
import { Modal, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { MyText } from '@Atoms';
import { FormInputs } from '@Molecules';

import styles from './styles';
export default memo(forwardRef((props, ref) => {
    const { colors } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    useImperativeHandle(ref, () => ({
        setVisible: () => {
            setModalVisible(prevState => !prevState)
        }
    }));
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
                    <MyText xxLarge bold center>{props.title || ''}</MyText>
                    <MyText large center>{props.description || ''}</MyText>
                    <View>
                        <FormInputs.CustomButton
                            style={{ width: '100%' }}
                            onSubmit={props.onPress}
                            disabled={false}
                            submitLabel={props.labelTrue || 'Ya'} />
                        <FormInputs.CustomButton
                            style={styles.secondaryButton(colors.white)}
                            labelStyle={styles.labelStyle(colors.gray)}
                            onSubmit={() => setModalVisible(false)}
                            disabled={false}
                            submitLabel={props.labelFalse || 'Batalkan'} />
                    </View>
                </View>
            </View>
        </Modal>
    )

}));