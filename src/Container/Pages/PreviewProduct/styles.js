import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 16, 
        paddingVertical: 12
    },
    containerDisc: { 
        flexDirection: 'row', 
        marginTop: 8, 
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
    productTitle: { 
        marginVertical: 8
    },
    rowDetail: (borderBottomColor) => ({ 
        borderBottomColor, 
        borderBottomWidth: 1, 
        flexDirection: 'row', 
        marginVertical: 8 
    }),
    textDetail: {
        flex: 1
    },
    containerStoreInfo: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 8 
    },
    storeInfo:{
        marginLeft: 8 
    },
    detailStoreInfo:{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 4
    },
    iconStoreInfo:{
        marginRight:8
    },
    containerButton: { 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        paddingBottom:12, 
        elevation:10
    },
    button:{
        width: width * .45
    },
    secondaryButton:(backgroundColor, borderColor) => ({
        backgroundColor, 
        borderColor, 
        borderWidth: 1, 
        borderRadius: 8 
    }),
    labelStyle: (color) => ({
        color
    })

});
export { width }