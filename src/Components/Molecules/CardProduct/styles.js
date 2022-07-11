import { Dimensions, 
    StyleSheet } from 'react-native'
const { height, width } = Dimensions.get('screen');
export default StyleSheet.create({
    container: (backgroundColor) => ({
        marginHorizontal: 12,
        elevation: 10,
        padding: 12,
        borderRadius: 10,
        marginBottom: 16,
        backgroundColor
    }),
    innerContainer: {
        flexDirection:'row'
    },
    containerInfo: {
        marginLeft: 20 
    },
    text: {
        marginTop: 6
    },
    badges: (backgroundColor) => ({
        justifyContent: 'center',
        backgroundColor,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginLeft: 10
    }),
    badgesText: {
        textTransform: 'capitalize'
    },
    containerButton: {
        flexDirection:'row', 
        justifyContent:'space-evenly', 
        marginTop:8
    }
})