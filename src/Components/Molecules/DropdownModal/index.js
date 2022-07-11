import React, { forwardRef, memo, useCallback, useImperativeHandle, useState, useRef } from 'react';
import { Modal, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import TouchableScale from 'react-native-touchable-scale';
import Toast from "react-native-toast-notifications";
import region from '@Data/Region';
import { MyText } from '@Atoms';

import styles from './styles';

let TOAST_ID = null;
const zoomIn = {
    0: {
        opacity: 0,
        scale: 0.8,
    },
    1: {
        opacity: 1,
        scale: 1,
    },
}
let LIST_LEVEL = null;
let PARENT_CODE = null;
let tmp_LIST_ITEM = [];
let INPUT_NAME = null;
let SELECTED_INPUT = null;
let key = null;
const { height, width } = Dimensions.get('screen');
export default memo(forwardRef((props, ref) => {
    const { colors } = useTheme();
    let defaultColor = props.error ? colors.red : colors.funBlue;
    const refTextQuery = useRef(null)
    const refToast = useRef(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [listItem, setListItem] = useState([]);
    useImperativeHandle(ref, () => ({
        createRegion,
        create,
    }));

    const showToast = (message = 'Simple Toast', duration = 1500, type = 'normal', placement = 'bottom') => {
        if (TOAST_ID != null) {
            refToast.current.update(TOAST_ID, message, { type: 'warning', duration: duration + 3000 })
            TOAST_ID = null;
            return false;
        }
        TOAST_ID = refToast.current.show(message, {
            type,//"normal | success | warning | danger | custom",
            placement,//"top | bottom",
            duration,
            offset: 30,
            animationType: 'slide-in',//"slide-in | zoom-in",
        });
        setTimeout(() => TOAST_ID = null, duration)
    }

    const create = useCallback(async (data = [], inputName = null, currentValue = null) => {
        if (data.length == 0) {
            showToast('Data tidak ditemukan');
            return false;
        }
        SELECTED_INPUT = currentValue == null ? null : JSON.parse(currentValue).description;
        INPUT_NAME = inputName;
        key = '';
        tmp_LIST_ITEM = data;
        setListItem(tmp_LIST_ITEM);
        setModalVisible(true);
    }, [listItem, modalVisible]);

    const createRegion = useCallback(async (level = null, inputName = null, currentValue = null, parent = null,) => {
        if (level == null) {
            alert('level null!')
            return false;
        }
        LIST_LEVEL = level;
        SELECTED_INPUT = currentValue == null ? null : JSON.parse(currentValue).description;
        PARENT_CODE = parent == null ? null : JSON.parse(parent).code;
        INPUT_NAME = inputName;
        key = (LIST_LEVEL == 0 ? 'provinsi' : (LIST_LEVEL == 1 ? 'kabupaten' : (LIST_LEVEL == 2 ? 'kecamatan' : 'kelurahan')));
        tmp_LIST_ITEM = LIST_LEVEL == 0 ? await region[key] : await region[key].filter(({ parentCode }) => parentCode == PARENT_CODE);
        if (tmp_LIST_ITEM.length > 0) {
            setListItem(tmp_LIST_ITEM);
            setModalVisible(prevState => !prevState);
        } else {
            showToast('Data tidak ditemukan');
        }
    }, [listItem, modalVisible]);

    const filterList = useCallback(query => {
        if (query.length > 3) {
            setListItem(listItem => listItem.filter(({ description }) => description.toLowerCase().includes(query.toLowerCase())));
        } else {
            clearFilter();
        }
    }, [listItem]);

    const clearFilter = useCallback(() => {
        if (tmp_LIST_ITEM.length != listItem) setListItem(tmp_LIST_ITEM);
        refTextQuery.current?.setNativeProps({ text: '' });
    }, [listItem]);

    const _onSelected = useCallback((list = null) => {
        tmp_LIST_ITEM = [];
        LIST_LEVEL = null;
        PARENT_CODE = null;
        ('code' in list && 'description' in list == true) ? props.onSelect({ ...list, inputName: INPUT_NAME }) : props.onClose();
        INPUT_NAME = null;
        SELECTED_INPUT = null;
        key = null;
        setListItem([]);
        setModalVisible(prevState => !prevState);
    }, [listItem, modalVisible]);

    const _onClose = useCallback(() => {
        setModalVisible(prevState => !prevState);
        props.onClose()
    }, [modalVisible])

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={_onSelected}
            statusBarTranslucent={true}
            hardwareAccelerated={true}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={_onClose}
                style={styles.container}>
                <Toast ref={refToast} />
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.innerContainer}>
                    {/* <Animatable.View animation={zoomIn} duration={500}>
                        <TextInput
                            ref={refTextQuery}
                            mode={'outlined'}
                            onChangeText={filterList}
                            placeholder={`Cari ${key}`}
                            returnKeyType={'search'}
                            style={styles.searchInput}
                            theme={styles.searchTheme(colors.funBlue, colors.funBlue)}
                            right={<TextInput.Icon
                                style={{ marginTop: 15 }}
                                name="close-circle"
                                onPress={clearFilter}
                                size={20}
                                color={defaultColor}
                                rippleColor={defaultColor}
                            />}
                        />
                    </Animatable.View> */}
                    <FlatList
                        style={styles.flatlist}
                        showsVerticalScrollIndicator={false}
                        data={listItem}
                        keyExtractor={({ code }) => code}
                        // ListHeaderComponent={tmp_LIST_ITEM.length != listItem.length ? <MyText center style={styles.textSearchResult}>Hasil Pencarian</MyText> : <></>}
                        renderItem={({ item: { code, description } }) => (
                            <Animatable.View animation={zoomIn} duration={500}>
                                <TouchableScale
                                    activeScale={.995}
                                    onPress={() => _onSelected({ code, description })}
                                    style={styles.listItem}>
                                    <MyText style={styles.listText(description == SELECTED_INPUT ? 'bold' : 'normal', description == SELECTED_INPUT ? colors.darkGray : colors.gray)}>
                                        {description}
                                    </MyText>
                                    {description == SELECTED_INPUT && <Icon name='check' size={18} color={colors.primary} />}
                                </TouchableScale>
                            </Animatable.View>
                        )}
                        ItemSeparatorComponent={() => <View style={styles.separator('rgba(0,0,0,0.1)')} />}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )

}));