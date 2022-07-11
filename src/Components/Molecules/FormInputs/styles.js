import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('screen');
export { height, width };
export default StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 60,
    },
    dateRangeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
    },
    inputDateRangeFloatingText: {
        position: 'absolute',
        top: 3,
        left: 10,
        backgroundColor: 'white'
    },
    inputDateRangeClearText: {
        position: 'absolute',
        top: 13,
        right: -((width / 2) - (width * .14))
    },
    overlayedInput: {
        height: 15,
        width: 15,
        zIndex: -1,
        position: 'absolute',
        left: 15,
        top: 15,
        backgroundColor: 'white',
    },
    inputDateRangeContainer: (borderColor) => ({
        justifyContent: 'center',
        paddingLeft: 10,
        width: (width / 2) - (width * 0.085),
        borderColor,
        borderWidth: 0.9
    }),
    inputDateContainer: {
        width: width * .76,
        height: 43,
        borderRadius: 15,
        position: 'absolute',
        top: 11,
        left: 0,
    },
    inputSelectContainer: {
        width: width * .78,
        minHeight: 60,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    inputDropdownContainer: (borderColor) => ({
        flex: 1,
        width: '100%',
        height: 43,
        marginTop: 5,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderColor,
        borderWidth: 1,
        marginVertical: 20,
    }),
    textInputDropdown: (color) => ({
        textAlign: 'left',
        color,
        fontSize: 12,
        fontWeight: 'normal',
        flexGrow: 1
    }),
    dropDownPlaceholder: {
        position: 'absolute',
        top: -8,
        left: 10,
        backgroundColor: 'white',
    },
    inputCameraContainer: (borderColor) => ({
        flexDirection:'row',
        width: '100%',
        minHeight: 80,
        marginVertical: 8,
        borderWidth:1,
        borderRadius:5,
        borderColor,
        padding:8,
    }),
    btnCameraContainer: (backgroundColor) => ({
        backgroundColor,
        margin: 10,
        alignSelf: 'center',
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    btnSecondary: (borderColor) => ({
        borderColor,
        flex: 1,
        padding: 8,
        borderWidth: 1.5,
        borderRadius: 10,
        marginHorizontal: 3,
        justifyContent: 'center',
        alignItems: 'center' 
    }),
    titleContainer: {
        flexDirection: 'row'
    },
    themeTextInput: (text, placeholder = colors.funBlue) => ({
        colors: {
            text,
            placeholder,
        },
        fonts: {
            regular: {
                fontFamily: 'Inter'
            }
        }
    }),
    maskedText: (fontSize = 12, height, color) => ({
        fontSize,
        height,
        marginLeft: 13,
        paddingLeft: 0,
        width: '85%',
        color,
    }),
    textInput: (fontSize = 12, textAlign = 'left', height = 58) => ({
        fontSize,
        textAlign,
        flexGrow: 1,
        padding: 0,
        borderRadius: 10,
        marginTop: 5,
        height,
        backgroundColor: 'white',
    }),
    affixContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        top: 0,
        right: 0,
        height: 20,
        width: width - (width * .1)
    },
    textAffix: {
        paddingRight: 15,
        flexGrow: 1,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: 40,
        marginVertical: 6.5,
    },
    btnContent: (backgroundColor) => ({
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 40,
        backgroundColor
    }),
    btnLabel: (color) => ({
        fontSize: 14,
        lineHeight: 14,
        fontFamily: 'Inter-Bold',
        // fontWeight: 'bold',
        textTransform: 'none',
        color,
    }),
    dropDown: (borderColor) => ({
        minHeight: 40,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        borderColor,
        marginTop: 5,
    }),
    dropDownSelectedText: (color) => ({
        fontSize: 12,
        color,
    }),
    dropDownInputSearch: (color) => ({
        color,
        height: 40,
        fontSize: 16,
        borderRadius: 10,
        borderColor: color,
    }),
    dropDownIcon: (tintColor) => ({
        width: 20,
        height: 20,
        tintColor,
    }),
    images: {
        width: 80,
        height: 80,
        borderRadius: 10,
        margin: 5,
    },
    deleteBtn: {
        height: 25,
        width: 25,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    imagesContainer: {
        width: (width * 0.9),
        marginTop: 10
        // height: 100,
    },
    containerInputCounter: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between'
    },
    textInputCounter: {
        width:120, 
        flexGrow:0, 
        alignSelf:'flex-start'
    },
    iconInputCounter: {
        marginTop: 15,
    }
});