import { Modal, View, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native'
import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RNCamera } from 'react-native-camera';
import Toast from "react-native-toast-notifications";
import { MyText } from '@Atoms';

import styles from './styles';
let TOAST_ID = null;
export default forwardRef((props, ref) => {
    const refCamera = useRef(null);
    const [open, setOpen] = useState(false);
    const [inputName, setInputName] = useState('');
    const [flashMode, setFlashMode] = useState(false);
    const [type, setType] = useState('back');
    const [cameraInUse, setCameraInUse] = useState(false);
    const { colors } = useTheme();

    const refToast = useRef(<Toast />);

    useImperativeHandle(ref, () => ({
        open: (name) => {
            setInputName(name)
            setOpen(prevstate => !prevstate);
        }
    }));

    const _onClose = () => {
        if (cameraInUse == true) return false;
        setInputName('')
        setOpen(prevstate => !prevstate)
        setFlashMode(false);
        setType('back');
        return true
    }

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

    const _takePicture = async camera => {
        try {
            setCameraInUse(true)
            const { uri, base64 } = await camera.takePictureAsync({ quality: 0.05, base64: true });
            setOpen(prevstate => !prevstate);
            props.onResult({ uri, base64, inputName })
            setCameraInUse(false)
        } catch (err) {
            showToast(`camera error : ${err}`, 5000, 'danger')
        }
    };
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={open}
            onRequestClose={_onClose}
            statusBarTranslucent={true}
            hardwareAccelerated={true}
        >
            <View style={styles.container}>
                <Toast ref={refToast} />
                {open && <RNCamera
                    ref={refCamera}
                    style={styles.preview}
                    type={RNCamera.Constants.Type[type]}
                    flashMode={RNCamera.Constants.FlashMode[flashMode ? 'on' : 'off']}
                    captureAudio={false}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status }) => {
                        if (status !== 'READY') return <MyText>Please Wait</MyText>;
                        return (<>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={_onClose}
                                style={styles.leftTopButton}>
                                <Icon name={'chevron-left'} color={colors.white} size={40} />
                            </TouchableOpacity>
                            {type == 'back' && <TouchableOpacity
                                activeOpacity={.8}
                                onPress={() => setFlashMode(prevState => !prevState)}
                                style={styles.rightTopButton}>
                                <Icon name={'flash'} color={!flashMode ? 'rgba(255,255,255,0.1)' : colors.sunShade} size={25} />
                            </TouchableOpacity>}
                            <View style={styles.bottomContainer}>
                                <View style={styles.containerItem} />
                                {cameraInUse &&
                                    <ActivityIndicator style={styles.containerItem}
                                        size={70} color={colors.funBlue} animating={true} /> ||
                                    <TouchableOpacity
                                        onPress={() => _takePicture(camera)}
                                        activeOpacity={0.8}
                                        style={styles.containerItem}>
                                        <View style={styles.capture}>
                                            <View style={styles.captureInner(colors.funBlue)} />
                                        </View>
                                    </TouchableOpacity>
                                }
                                {!cameraInUse && <TouchableOpacity
                                    activeOpacity={.8}
                                    onPress={() => {
                                        setType(prevState => prevState == 'back' ? 'front' : 'back')
                                        setFlashMode(true)
                                    }}
                                    style={styles.containerItem}>
                                    <Icon name={type == 'back' ? 'camera-front-variant' : 'camera-rear-variant'}
                                        color={type == 'back' ? 'rgba(255,255,255,0.1)' : colors.white} size={25} />
                                </TouchableOpacity>}
                            </View>
                        </>);
                    }}
                </RNCamera>}
            </View>
        </Modal>
    )
});