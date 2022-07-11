import React, { useEffect, useState, memo, useCallback } from 'react';
import { View, Platform, Text } from 'react-native';
import Spinner from 'react-native-spinkit';
import * as Animatable from 'react-native-animatable';
import {
    getBrand,
    getDeviceName,
    getSystemVersion,
    getSerialNumber,
    syncUniqueId,
    isEmulator,
} from 'react-native-device-info';
import { log } from '../../../Utils';
import { ICON_ECENTRIX } from '../../../Components/Atoms/Images';
import { useTheme } from 'react-native-paper';
import { MyText } from '../../../Components/Atoms';
import styles from './styles';
export default memo(({ navigation: { replace } }) => {
    const { colors } = useTheme();
    useEffect(() => {
        log('Mount SPLASH');
        setTimeout(() => replace('Login'), 2000)
        return () => {
            log('Unmount SPLASH');
        };
    });
    return (
        <View style={styles.container}>
            <Animatable.Image
                animation="fadeIn"
                duration={1500}
                useNativeDriver
                source={ICON_ECENTRIX}
            />
            <MyText xLarge bold color={colors.sunShade}>ECX Store</MyText>
            <Spinner isVisible={true} size={30} type={'ThreeBounce'} color={'#F69621'} />
            <Text>HOLA</Text>
        </View >
    );
})
