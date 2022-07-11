import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{ 
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'flex-end' 
    },
    innerContainer:(backgroundColor) => ({
        backgroundColor, 
        borderTopStartRadius: 20, 
        borderTopEndRadius: 20, 
        padding: 12
    }),

})