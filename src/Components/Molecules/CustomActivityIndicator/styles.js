import { Dimensions, StyleSheet } from 'react-native'
const { height, width } = Dimensions.get('screen');
export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 999999999999,
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinnerHeight: height / 9,
})