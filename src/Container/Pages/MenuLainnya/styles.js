import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: (backgroundColor) => ({
        backgroundColor
    }),
    imgContainer: {
        flex: 1,
    },
    bgImage: {
        width:'100%',
        position: 'absolute', 
        top: 0, 
        left: 0,
        backgroundColor:'white',
        resizeMode:'stretch',
    },
    containerProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        height:175,
    },
    profileImage:(backgroundColor) => ({
        width: 75,
        height: 75,
        borderRadius: 33,
        resizeMode: 'contain',
        backgroundColor,
        marginRight: 10
    }),
    profileInfo: {
        marginRight: 8
    },
    menuContainer: (backgroundColor) => ({
        backgroundColor, 
        marginBottom:20
    }),
    menuPengaturan: {
        padding:16, 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center'
    }
});