import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        flex: 1,
        marginVertical:12,
    },
    innerContainer: {
        width,
        paddingHorizontal: width * .05,
    },
});