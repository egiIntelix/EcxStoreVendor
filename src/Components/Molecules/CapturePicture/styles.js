import { StyleSheet, Dimensions, StatusBar } from 'react-native'
const { width } = Dimensions.get('screen')
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    leftTopButton: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: StatusBar.currentHeight,
        left: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightTopButton: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: StatusBar.currentHeight,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        height: 80,
        width,
        position: 'absolute',
        bottom: 20,
        left: 0,
        flexDirection: 'row'
    },
    containerItem: {
        width: width / 3,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    capture: {
        height: 80,
        width: 80,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    captureInner: (backgroundColor) => ({
        height: 60,
        width: 60,
        backgroundColor,
        borderRadius: 30
    })
})