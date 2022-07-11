import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    bgImage: {
        width:'100%',
        position: 'absolute', 
        top: 0, 
        left: 0,
        resizeMode:'stretch'
    },
    containerTopIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 12,
        paddingHorizontal: 18 
    },
    topIcon: {
        marginLeft:14
    },
    containerProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18
    },
    profileImage:(backgroundColor) => ({
        width: 60,
        height: 60,
        borderRadius: 30,
        resizeMode: 'contain',
        backgroundColor,
        marginRight: 10
    }),
    containerStoreInfo: {
        marginTop: 20, 
        paddingHorizontal: 18
    },
    innerContainerStoreInfo: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginVertical: 10
    },
    cardInfo: (backgroundColor) => ({ 
        width: '48%', 
        backgroundColor, 
        borderRadius: 10, 
        elevation: 10, 
        height: 70, 
        padding: 12, 
        justifyContent: 'space-between' 
    }),
    cardTitle: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    textTitle: {
        marginLeft: 2
    },
    containerOperationalInfo: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical: 20,
        paddingHorizontal: 18 
    },
    operationalInfo: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    containerStatistics: {
        marginVertical:20, 
        paddingHorizontal: 18
    },
    statistics: (backgroundColor) => ({
        width:'100%',
        height:250,
        backgroundColor,
        justifyContent:'center',
        alignItems:'center'
    })
});