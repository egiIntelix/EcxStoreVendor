import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: width * .05,
    },
    innerContainer: {
        alignItems: 'center',
        height: height * .3,
        justifyContent:'space-around'

    }
});