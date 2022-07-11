import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    headerStyle: {
        paddingHorizontal:16
    },
    listItem: (backgroundColor) => ({
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal:16,
        backgroundColor
    }),
    icon: {
        marginRight:14
    }
})