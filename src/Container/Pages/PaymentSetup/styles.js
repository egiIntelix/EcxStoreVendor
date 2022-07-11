import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    skip: {
        alignItems:'flex-end',
        paddingHorizontal: width * .05,
        marginTop:10
    },
});