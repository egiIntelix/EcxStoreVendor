import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F69621',
    },
});