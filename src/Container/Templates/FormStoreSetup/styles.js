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
    containerButton: {
        flexDirection: 'row',
    },
    containerInnerButton: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    dot:(backgroundColor) => ({
        width:10, 
        height:10, 
        borderRadius:5, 
        backgroundColor, 
        marginHorizontal:2
    }),
});