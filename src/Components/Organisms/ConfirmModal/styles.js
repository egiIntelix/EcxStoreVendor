import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{ 
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    innerContainer:(backgroundColor) => ({
        backgroundColor, 
        borderRadius: 20, 
        padding: 12,
        height: 210,
        justifyContent:'space-between',
    }),
    secondaryButton:(backgroundColor) => ({
        backgroundColor
    }),
    labelStyle: (color) => ({
        color
    })

})