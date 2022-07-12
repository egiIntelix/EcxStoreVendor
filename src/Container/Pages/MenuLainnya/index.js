import React, { memo } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from "react-native-paper";
import { PageWrapper, MyText, Splitter } from "@Atoms";
import { IMAGE_ELIPSE, ICON_SHOP } from "@Images";
import { Menu } from "@Organisms";

import styles from "./styles";
import LIST_MENU from './menu';

export default memo(({navigation}) => {
    const { colors } = useTheme()
    return (
        <PageWrapper>
            <ScrollView style={styles.container(colors.lightGray)}>
                <View style={styles.imgContainer}>
                    <Image source={IMAGE_ELIPSE} style={styles.bgImage} />
                </View>
                <View style={styles.containerProfile}>
                    <Image source={ICON_SHOP} style={styles.profileImage(colors.white)} />
                    <View style={styles.profileInfo}>
                        <MyText xLarge bold>Toko XYZ</MyText>
                        <MyText>Rp 0</MyText>
                    </View>
                    <Icon name={"chevron-right"} size={35} color={colors.gray} />
                </View>
                <View style={styles.menuContainer(colors.white)}>
                    <Menu data={LIST_MENU} header={() => <MyText xLarge bold>Menu Lainnya</MyText>} />
                    <Splitter xLarge color={colors.lightGray} />
                    <TouchableOpacity activeOpacity={.8} style={styles.menuPengaturan} onPress={() => navigation.navigate("Pengaturan")}>
                        <View>
                            <MyText xLarge bold>Pengaturan</MyText>
                            <MyText color={colors.gray}>Atur atau ubah pengaturan tokomu</MyText>
                        </View>
                        <Icon name={"chevron-right"} size={40} color={colors.gray} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </PageWrapper>
    )
})