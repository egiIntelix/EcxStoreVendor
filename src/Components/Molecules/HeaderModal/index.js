import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';
import {MyText} from '@Atoms';
import styles from './styles';

export default ({title = "", icon="close", onPress, style}) => {
    const {colors} = useTheme();
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity activeOpacity={.8} onPress={onPress}>
                <Icon name={icon} size={35} color={colors.black} />
            </TouchableOpacity>
            <MyText bold xxLarge style={styles.title}>{title}</MyText>
        </View>
    )
}

