
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import { navigationRef } from '../../Config/';
import { log } from '../../Utils';

import Example from './Example';
import Splash from './Splash';
import Home from './Home';
import Login from './Login';
import Daftar from './Daftar';
import BukaToko from './BukaToko';
import Produk from './Produk';
import Pesanan from './Pesanan';
import MenuLainnya from './MenuLainnya';
import SelamatDatang from './SelamatDatang';
import StoreSetup from './StoreSetup';
import PaymentSetup from './PaymentSetup';
import PolicySetup from './PolicySetup';
import SupportSetup from './SupportSetup';
import StoreSeoSetup from './StoreSeoSetup';
import StoreSocialSetup from './StoreSocialSetup';
import SetupSelesai from './SetupSelesai';
import Pengaturan from './Pengaturan';
import TambahProduk from './TambahProduk';
import PreviewProduct from './PreviewProduct';
import DetailPesanan from './DetailPesanan';
import Artikel from './Artikel';
import EditArtikel from './EditArtikel';
import TambahArtikel from './TambahArtikel';
import Pembayaran from './Pembayaran';

const Stack = createNativeStackNavigator();

const animationSlide = {
    headerMode: 'none',
    headerShown: false,

}
export default stackProps => (
    <NavigationContainer
        ref={navigationRef}
        onReady={() => { 
            SplashScreen.hide();
            log('Root Props : ', stackProps) 
        }}>
        <Stack.Navigator
            initialRouteName={"Home"}
            mode={"card"}
            ScreenOptions={{}}>
            <Stack.Screen name="Example" options={() => (animationSlide)}>
                {props => <Example  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Splash" options={() => (animationSlide)}>
                {props => <Splash  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Home" options={() => (animationSlide)}>
                {props => <Home  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Login" options={() => (animationSlide)}>
                {props => <Login  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Daftar" options={() => (animationSlide)}>
                {props => <Daftar  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="BukaToko" options={() => (animationSlide)}>
                {props => <BukaToko  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Produk" options={() => (animationSlide)}>
                {props => <Produk  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Pesanan" options={() => (animationSlide)}>
                {props => <Pesanan  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="MenuLainnya" options={() => (animationSlide)}>
                {props => <MenuLainnya  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="SelamatDatang" options={() => (animationSlide)}>
                {props => <SelamatDatang  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="StoreSetup" options={() => (animationSlide)}>
                {props => <StoreSetup  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="PaymentSetup" options={() => (animationSlide)}>
                {props => <PaymentSetup  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="PolicySetup" options={() => (animationSlide)}>
                {props => <PolicySetup  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="SupportSetup" options={() => (animationSlide)}>
                {props => <SupportSetup  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="StoreSeoSetup" options={() => (animationSlide)}>
                {props => <StoreSeoSetup  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="StoreSocialSetup" options={() => (animationSlide)}>
                {props => <StoreSocialSetup  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="SetupSelesai" options={() => (animationSlide)}>
                {props => <SetupSelesai  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Pengaturan" options={() => (animationSlide)}>
                {props => <Pengaturan  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="TambahProduk" options={() => (animationSlide)}>
                {props => <TambahProduk  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="PreviewProduct" options={() => (animationSlide)}>
                {props => <PreviewProduct  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="DetailPesanan" options={() => (animationSlide)}>
                {props => <DetailPesanan  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Artikel" options={() => (animationSlide)}>
                {props => <Artikel  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="EditArtikel" options={() => (animationSlide)}>
                {props => <EditArtikel  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="TambahArtikel" options={() => (animationSlide)}>
                {props => <TambahArtikel  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Pembayaran" options={() => (animationSlide)}>
                {props => <Pembayaran  {...props} {...stackProps} />}
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
);