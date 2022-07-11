import React, { memo, useEffect } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';
import { PageWrapper, MyText, Splitter } from "@Atoms";
import { IMAGE_ELIPSE, ICON_SHOP, ICON_MONEY_OUTLINE, ICON_MONEY, ICON_PRODUCT_ORANGE, ICON_RP_ORANGE } from "@Images";
import { log } from '@Utils';

import styles from "./styles";

export default memo(({ navigation: {navigate}, navBarState }) => {
    const { colors } = useTheme();
    useEffect(() => {
        log('mount Home');
        navBarState(true)
    })
    return (
        <PageWrapper>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={IMAGE_ELIPSE} style={styles.bgImage} />
                    <View style={styles.containerTopIcon}>
                        <TouchableOpacity>
                            <Icon name="bell-outline" color={colors.black} size={35} style={styles.topIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Pengaturan')}>
                            <Icon name="cog-outline" color={colors.black} size={35} style={styles.topIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerProfile}>
                        <Image source={ICON_SHOP} style={styles.profileImage(colors.white)} />
                        <MyText xLarge bold>Toko XYZ</MyText>
                    </View>
                    <View style={styles.containerStoreInfo}>
                        <View style={styles.innerContainerStoreInfo}>
                            <View style={styles.cardInfo(colors.white)}>
                                <View style={styles.cardTitle}>
                                    <Image source={ICON_MONEY_OUTLINE} />
                                    <MyText large color={colors.gray} style={styles.textTitle}>Saldo</MyText>
                                </View>
                                <MyText large bold>Rp0</MyText>
                            </View>
                            <View style={styles.cardInfo(colors.white)}>
                                <View style={styles.cardTitle}>
                                    <Image source={ICON_RP_ORANGE} />
                                    <MyText large color={colors.gray} style={styles.textTitle}>Penjualan bulan ini</MyText>
                                </View>
                                <MyText large bold>Rp0</MyText>
                            </View>
                        </View>
                        <View style={styles.innerContainerStoreInfo}>
                            <View style={styles.cardInfo(colors.white)}>
                                <View style={styles.cardTitle}>
                                    <Image source={ICON_MONEY} />
                                    <MyText large color={colors.gray} style={styles.textTitle}>Pendapatan bulan ini</MyText>
                                </View>
                                <MyText large bold>Rp0</MyText>
                            </View>
                            <View style={styles.cardInfo(colors.white)}>
                                <View style={styles.cardTitle}>
                                    <Image source={ICON_PRODUCT_ORANGE} />
                                    <MyText large color={colors.gray} style={styles.textTitle}>Terjual bulan ini</MyText>
                                </View>
                                <MyText large bold>Rp0</MyText>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerOperationalInfo}>
                        <View style={styles.operationalInfo}>
                            <MyText large>Jam Operasional</MyText>
                            <MyText xLarge bold>24 Jam</MyText>
                        </View>
                        <Splitter vertical />
                        <View style={styles.operationalInfo}>
                            <MyText large>Follower</MyText>
                            <MyText xLarge bold>0</MyText>
                        </View>
                    </View>
                    <Splitter large color={colors.lightGray} />
                    <View style={styles.containerStatistics}>
                        <MyText bold xLarge>Statistik</MyText>
                        <View style={styles.statistics(colors.lightGray)}>
                            <MyText xLarge bold color={colors.gray}>(Statistik Toko)</MyText>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </PageWrapper>
    )
})