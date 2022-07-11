import { Dimensions, StyleSheet } from 'react-native'
const { width } = Dimensions.get('screen');
const NAVBAR_HEIGHT = 60;

export default StyleSheet.create({
    container: (backgroundColor) => ({
        // width, 
        height: NAVBAR_HEIGHT,
        backgroundColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width * .03,
        elevation: 7
    }),
    title: (color) => ({
        flexGrow: 1,
        color,
        paddingLeft:8
    }),
    actionContainer: {
        height: 35,
        width: 35,
    },
})