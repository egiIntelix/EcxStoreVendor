import { View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import styles from './styles';

export default (props) => {
    const { colors } = useTheme();
    let height = props.vertical == true && '100%' || props.small == true && 2 || props.normal == true && 4 || props.large == true && 8 || props.xLarge == true && 10 || props.xxLarge == true && 12 || props.xxxLarge == true && 24 || 2;
    let width = props.vertical != true && '100%' || props.small == true && 2 || props.normal == true && 4 || props.large == true && 8 || props.xLarge == true && 10 || props.xxLarge == true && 12 || props.xxxLarge == true && 24 || 2;
    let backgroundColor = props.color || colors.gray;
    return <View {...props} style={[styles.splitter(width, height, backgroundColor), props.style]}>{props.children}</View>
}

