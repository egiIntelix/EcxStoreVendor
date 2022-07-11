import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    search: (backgroundColor) =>  ({
        backgroundColor, 
        height:40, 
        margin:12,
        fontSize:12,
        borderRadius: 15
    }),
    iconSearch: {
        marginTop:15
    }
});