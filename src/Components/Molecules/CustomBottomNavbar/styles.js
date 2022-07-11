import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('screen')

export default StyleSheet.create({
    viewOverlay: (height) => ({
        backgroundColor: 'transparent', 
        width, 
        height
    }),
    container: (toolBarYPos, ToolBarHeight) => ({
        transform: [
            {
                translateY: toolBarYPos
            }
        ], 
        position: 'absolute',
        width: '100%',
        bottom: -ToolBarHeight,
        left: 0,
        height: ToolBarHeight,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3, },
        shadowOpacity: 0.5,
        shadowRadius: 4.5,
        elevation: 7,
        flexDirection: 'row',
    }),
    menu:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    image:{
        width: 25,
        height: 25,
    }
});