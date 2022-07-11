import React, { forwardRef, memo, useImperativeHandle, useState, useRef } from 'react';
import { Modal, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { HeaderModal } from '@Molecules';
import { Menu, ConfirmModal } from '@Organisms';
import { log } from '@Utils';

import styles from './styles';
import LIST_MENU from './menu';
export default memo(forwardRef((props, ref) => {
    const { colors } = useTheme();
    const refConfirmArchiveModal = useRef(<ConfirmModal />);
    const refConfirmDeleteModal = useRef(<ConfirmModal />);
    const [dataProduct, setDataProduct] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const _previewProduct = () => {
        setModalVisible(false);
        props.navigation.navigate("PreviewProduct", dataProduct);
    }
    const _archivedProduct = () => {
        log("Archived")
        refConfirmArchiveModal?.current?.setVisible();
    }
    const _deleteProduct = () => {
        log("Delete")
        refConfirmDeleteModal?.current?.setVisible();
    }
    const _onArchivedProduct = (dataProduct) => {
        log("Archived", dataProduct)
        refConfirmArchiveModal?.current?.setVisible();
    }
    const _onDeletedProduct = (dataProduct) => {
        log("Deleted", dataProduct)
        refConfirmDeleteModal?.current?.setVisible();
    }
    useImperativeHandle(ref, () => ({
        toggle: (data = {}) => {
            setDataProduct(data);
            setModalVisible(prevState => !prevState)
        },
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
                log("Close modal")
                setModalVisible(false);
            }}
            hardwareAccelerated={true}>
            <View style={styles.container}>
                <View style={styles.innerContainer(colors.white)}>
                    <HeaderModal title="Atur" onPress={() => setModalVisible(false)} style={styles.header} />
                    <Menu data={LIST_MENU(_previewProduct, _archivedProduct, _deleteProduct)}/>
                </View>
                <ConfirmModal ref={refConfirmArchiveModal} 
                    onPress={() => _onArchivedProduct(dataProduct)}
                    title={"Arsipkan Produk?"}
                    description={"Dengan mengarsipkan produk, berarti produkmu tidak dapat dicari oleh pembeli"}
                    labelTrue={"Ya, Arsipkan"}/>
                <ConfirmModal ref={refConfirmDeleteModal} 
                    onPress={() => _onDeletedProduct(dataProduct)}
                    title={"Hapus Produk?"}
                    description={"Yakin menghapus produk ini?"}
                    labelTrue={"Ya, Hapus"}/>
            </View>
        </Modal>
    )

}));