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
    const [dataArticle, setDataArticle] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const _editArticle = () => {
        setModalVisible(false);
        props.navigation.navigate("EditArtikel", dataArticle);
    }
    const _archivedArticle = () => {
        log("Archived")
        refConfirmArchiveModal?.current?.setVisible();
    }
    const _deleteArticle = () => {
        log("Delete")
        refConfirmDeleteModal?.current?.setVisible();
    }
    const _onArchivedArticle = (dataArticle) => {
        log("Archived", dataArticle)
        refConfirmArchiveModal?.current?.setVisible();
    }
    const _onDeletedArticle = (dataArticle) => {
        log("Deleted", dataArticle)
        refConfirmDeleteModal?.current?.setVisible();
    }
    useImperativeHandle(ref, () => ({
        toggle: (data = {}) => {
            setDataArticle(data);
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
                    <HeaderModal title="Pilih" onPress={() => setModalVisible(false)} style={styles.header} />
                    <Menu data={LIST_MENU(_editArticle, _deleteArticle, _archivedArticle)}/>
                </View>
                <ConfirmModal ref={refConfirmArchiveModal} 
                    onPress={() => _onArchivedArticle(dataArticle)}
                    title={"Arsipkan Artikel?"}
                    description={"Dengan mengarsipkan artikel, berarti artikelmu tidak dapat dicari oleh pembeli"}
                    labelTrue={"Ya, Arsipkan"}/>
                <ConfirmModal ref={refConfirmDeleteModal} 
                    onPress={() => _onDeletedArticle(dataArticle)}
                    title={"Hapus Artikel?"}
                    description={"Yakin menghapus artikel ini?"}
                    labelTrue={"Ya, Hapus"}/>
            </View>
        </Modal>
    )

}));