import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1
    },
    innerContainer: {
        padding: 12
    },
    row:{
        flexDirection:'row', 
        marginVertical:4,
        alignItems:'center'
    },
    titleText: {
        flex: 1
    },
    valueText: {
        flex: 1,
        flexGrow: 2
    },
    containerProduct: {
        alignSelf:'flex-start', 
        marginLeft:12, 
        overflow:'hidden', 
        flex:1
    },
    titleProduct: {
        marginBottom:8
    },
    containerPembayaran: {
        flex: 1,
        flexGrow: 2,
        flexDirection:'row', 
        alignItems:'center'
    },
    iconPembayaran: {
        height:20, 
        resizeMode:'cover'
    }
})