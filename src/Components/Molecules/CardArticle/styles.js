import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: (backgroundColor) => ({ 
        backgroundColor,
        elevation: 10, 
        borderRadius: 10, 
        marginVertical: 8,
        marginHorizontal: 12,
    }),
    innerContainer: {
        padding: 12
    },
    containerInfo: {
        flexDirection: 'row'
    },
    info:{
        flex: 1
    },
    containerStatus:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: 8
    },
    badges: (backgroundColor) => ({ 
        backgroundColor, 
        justifyContent: 'center', 
        borderRadius: 4, 
        paddingHorizontal: 10, 
        marginRight: 10, 
        padding: 2 
    }),
    buttonOption: {
        alignSelf: 'flex-end'
    }
})