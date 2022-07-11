import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('screen');
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: width * .2,
    },
    innerContainer: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    listItem: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 45,
        paddingHorizontal: width * .1,
    },
    listText: (fontWeight, color) => ({
        lineHeight: 20,
        fontSize: 14,
        fontWeight,
        color,
    }),
    flatlist: {
        height: height * .9,
        width: width * .9,
        marginVertical: 10
    },
    searchInput: {
        alignSelf: 'center',
        width: width * .8,
        height: 45,
        marginVertical: 10,
        backgroundColor: 'white',
        fontSize: 12,
    },
    searchTheme: (text, placeholder) => ({
        roundness: 10,
        colors: {
            text,
            placeholder,
        },
        fonts: {
            regular: {
                fontFamily: 'Montserrat'
            }
        }
    }),
    separator: (backgroundColor) => ({
        height: 0.3,
        width: width * .9,
        alignSelf: 'center',
        backgroundColor,
    }),
})