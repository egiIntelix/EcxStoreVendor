import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';
import { back } from '@Config';
import { MyText } from '@Atoms';
import { log } from '@Utils';

import styles from './styles';
export default ({ left = null, title = null, right = null, leftPress = null, iconTintColor, bgColor, titleColor, center=false }) => {
    const { colors } = useTheme();
    return (
        <View style={styles.container(bgColor || colors.white)}>
            {left != null &&
                typeof left == 'function' ? left() :
                left != false ? <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => typeof leftPress == 'function' ? leftPress() : back()}
                    style={styles.actionContainer}>
                    <Icon name={'arrow-left'} size={35} color={iconTintColor || colors.black} />
                </TouchableOpacity> : center ? <View style={styles.actionContainer}/> : <></> }
            {typeof title == 'function' ? title() : <MyText bold xxLarge style={styles.title(titleColor || colors.black)} center={center}>{title}</MyText>}
            {right == null ? <View style={styles.actionContainer} /> :
                typeof right == 'function' ? <View style={[styles.actionContainer, {width:100, justifyContent:'center', alignItems:'flex-end'}]}>{right()}</View> :
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => log('close')}
                        style={styles.actionContainer}>
                        <Icon name={'close'} size={35} color={colors.primary} />
                    </TouchableOpacity>}
        </View>
    )
}