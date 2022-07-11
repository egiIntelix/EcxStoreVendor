import React, { memo, forwardRef, useImperativeHandle, useState } from 'react'
import { View, Modal, } from 'react-native'
import Spinner from 'react-native-spinkit';
import { useTheme } from 'react-native-paper';
import { MyText } from '@Atoms';

import styles from './styles';

export default memo(forwardRef((props, ref) => {
    const { colors } = useTheme();
    useImperativeHandle(ref, () => ({
        show,
    }));
    const [shown, setShown] = useState(false);
    const [indicatorStatus, setIndicatorStatus] = useState('');
    const show = (shown = false, indicatorStatus = '') => {
        setShown(shown);
        setIndicatorStatus(indicatorStatus)
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={shown}
            statusBarTranslucent={true}
            hardwareAccelerated={true}
            onRequestClose={() => true}>
            <View style={styles.container}>
                <Spinner style={{}} isVisible={true} size={styles.spinnerHeight} type={'ThreeBounce'} color={colors.white} />
                <MyText large color={colors.white} bold center>{indicatorStatus}</MyText>
            </View>
        </Modal>
    )
}));