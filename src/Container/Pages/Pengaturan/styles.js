import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: (backgroundColor) => ({
        flex:1,
        backgroundColor
    }),
    footer:{
        paddingVertical: 4, 
        flexDirection: 'row', 
        justifyContent: 'center'
    }
})