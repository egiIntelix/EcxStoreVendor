import React, { useState, useEffect, forwardRef, useImperativeHandle, useCallback } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { MyText } from '@Atoms';
import {ICON_HOME, ICON_PRODUCT, ICON_SHOPPING_CART, ICON_SQUARED_MENU} from '@Images';
import {reset, getCurrentRoute} from '@RootNavigation';
import { log } from '@Utils';

import styles from "./styles";

const ToolBarHeight = 55;
export default forwardRef((props, ref) => {
    const { colors } = useTheme();
    useEffect(
        () => {
            // log('Mount CustomNavBar')
            setActiveTab(0);
            return () => {
                // log('UnMount CustomNavBar')
            }
        }, [])
    const [toolBarYPos, setToolBarYPos] = useState(new Animated.Value(0));
    const [activeTab, setActiveTab] = useState(0);
    const [navbarOverlay, setNavbarOverlay] = useState(0);


    useImperativeHandle(ref, () => ({
        flip(props) { _onFlipNavbar(props) },
        jumpTo(index) { _onTabClick(index) }
    }));
    const _onFlipNavbar = useCallback(props => {
        if (props) {
            Animated.spring(toolBarYPos, {
                toValue: -ToolBarHeight,
                duration: 100,
                useNativeDriver: true,
            }).start()
            setNavbarOverlay(ToolBarHeight)
        } else {
            setNavbarOverlay(0)
            Animated.spring(toolBarYPos, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true,
            }).start()
        }
    }, [navbarOverlay])
    const _onTabClick = (index) => {
        global.intervalCount = 0;
        if (['Home', 'Produk', 'Pesanan', 'MenuLainnya'].includes(getCurrentRoute().name) && (activeTab == index)) {
            log('Blocked Route')
            return false;
        }
        setActiveTab(index);
        switch (index) {
            case 0: reset('Home');
                break;
            case 1: reset('Produk');
                break;
            case 2: reset('Pesanan');
                break;
            case 3: reset('MenuLainnya');
                break;
            default: log('default action Custom Toolbar');
        }
    }
    return (
        <>
            <View style={ styles.viewOverlay(navbarOverlay)} />
            <Animated.View style={styles.container(toolBarYPos, ToolBarHeight)}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => _onTabClick(0)}
                    style={styles.menu}>
                    <Animated.Image
                        tintColor={activeTab == 0 ? colors.primary : colors.black}
                        source={ICON_HOME}
                        style={styles.image}
                    />
                    <MyText color={activeTab == 0 ? colors.primary : colors.black}>Home</MyText>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => _onTabClick(1)}
                    style={styles.menu}>
                    <Animated.Image
                        tintColor={activeTab == 1 ? colors.primary : colors.black}
                        source={ICON_PRODUCT}
                        style={styles.image}
                    />
                    <MyText color={activeTab == 1 ? colors.primary : colors.black}>Produk</MyText>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => _onTabClick(2)}
                    style={styles.menu}>
                    <Animated.Image
                        tintColor={activeTab == 2 ? colors.primary : colors.black}
                        source={ICON_SHOPPING_CART}
                        style={styles.image}
                    />
                    <MyText color={activeTab == 2 ? colors.primary : colors.black}>Pesanan</MyText>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => _onTabClick(3)}
                    style={styles.menu}>
                    <Animated.Image
                        tintColor={activeTab == 3 ? colors.primary : colors.black}
                        source={ICON_SQUARED_MENU}
                        style={styles.image}
                    />
                    <MyText color={activeTab == 3 ? colors.primary : colors.black}>Lainnya</MyText>
                </TouchableOpacity>
            </Animated.View>
        </>
    )
})

