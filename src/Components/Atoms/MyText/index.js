import { Text } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import styles from './styles';

export default (props) => {
    const { colors } = useTheme();
    let textAlign = props.textAlign || props.center == true && 'center' || props.right == true && 'right' || props.left == true && 'left' || 'left';
    let fontSize = props.fontSize || props.small == true && 10 || props.normal == true && 12 || props.large == true && 14 || props.xLarge == true && 18 || props.xxLarge == true && 20 || props.xxxLarge == true && 24 || 12;
    let fontWeight = props.fontWeight || props.bold == true && 'bold' || props.normal == true && 'normal' || 'normal';
    let color = props.color || colors.black;
    let fontFamily = props.fontFamily || 'Inter';
    let lineHeight = props.lineHeight || fontSize + 2;
    return <Text {...props} style={[styles.text(textAlign, fontSize, fontWeight, color, fontFamily, lineHeight), props.style]}>{props.children}</Text>
}

