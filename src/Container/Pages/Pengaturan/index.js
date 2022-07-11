import React, { memo, useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "react-native-paper";
import { PageWrapper, MyText } from '@Atoms';
import { Navbar, Menu } from '@Organisms';

import styles from './styles';
import LIST_MENU from './menu';

export default memo((props) => {
    const { colors } = useTheme();
    useEffect(() => {
        props.navBarState(false);
        return (() => {
            props.navBarState(true);
        })
    })
    return (
        <PageWrapper>
            <View style={styles.container(colors.lightGray)}>
                <ScrollView>
                    <Navbar title={"Pengaturan"} />
                    <Menu data={LIST_MENU} {...props} />
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity activeOpacity={.8}>
                        <MyText large center color={colors.darkGray}>Syarat dan Ketentuan</MyText>
                    </TouchableOpacity>
                    <MyText large center color={colors.darkGray}>  |  </MyText>
                    <TouchableOpacity activeOpacity={.8}>
                        <MyText large center color={colors.darkGray}>Kebijakan Privasi</MyText>
                    </TouchableOpacity>
                </View>
            </View>
        </PageWrapper>
    )
});

