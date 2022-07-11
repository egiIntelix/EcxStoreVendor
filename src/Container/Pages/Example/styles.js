import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F69621',
        textAlign: 'center'
    },
    label: {
        color: 'black',
        margin: 20,
        marginLeft: 0,
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: '#155EAD',
        borderRadius: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 12,
        padding: 8,
        backgroundColor: 'white',
    },
    input: {
        backgroundColor: '#bdc3c7',
        height: 40,
        padding: 10,
        borderRadius: 4,
        color: 'black'
    },
});