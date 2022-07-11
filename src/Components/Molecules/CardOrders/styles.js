import { Dimensions, StyleSheet } from 'react-native'
const { height, width } = Dimensions.get('screen');
export default StyleSheet.create({
    container: (backgroundColor) => ({
        marginHorizontal: 12,
        elevation: 10,
        borderRadius: 10,
        marginBottom: 16,
        backgroundColor
    }),
    innerContainer: {
        flexDirection:'row',
        padding: 12,
    },
    containerInfo: {
        marginLeft: 20,
        overflow:'hidden',
        flex: 1,
    },    
    containerDisc: { 
        flexDirection: 'row', 
        marginBottom: 8, 
        alignItems: 'center',
    },
    textDisc: (backgroundColor) => ({ 
        backgroundColor, 
        padding: 4, 
        marginRight: 4 
    }),
    priceDisc: (textDecorationColor) => ({ 
        textDecorationColor,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid' 
    }),
})