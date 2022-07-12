import React, { memo, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from 'react-native-paper';
import moment from "moment";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { PageWrapper, MyImage, MyText, Splitter } from "@Atoms";
import { ICON_EMPTY_IMAGE, ICON_SHOP } from "@Images";
import { FormInputs } from "@Molecules";
import { Navbar } from "@Organisms";
import { log } from "@Utils";

import styles, { width } from "./styles";

export default memo(({ navigation, navBarState, route: { params } }) => {
    const { colors } = useTheme();
    const [fullDesc, setFulldesc] = useState(false);
    const { 
        image, 
        price, 
        name, 
        regular_price, 
        sale_price, 
        total_sales, 
        categories, 
        description, 
        short_description,
        store_name,
        store_address,
        store_registered,
        average_rating
    } = params;
    const _calcDisc = (regular_price, sale_price) => (100 - (parseInt(sale_price)/parseInt(regular_price)*100)).toString();
    useEffect(() => {
        navBarState(false);
        return (() => navBarState(true))
    })
    return (

        <PageWrapper>
            <ScrollView>
                <View style={styles.container}>
                    <Navbar title={"Rincian Produk"} right={() => <TouchableOpacity activeOpacity={0.8}>
                        <Icon name={"share-variant-outline"} size={35} />
                    </TouchableOpacity>} />
                    <MyImage source={image && { uri: image[0] } || ICON_EMPTY_IMAGE} height={width} width={width} resizeMode={'contain'} radius={[5, 5, 5, 5]} />
                    <View style={styles.innerContainer}>
                        <MyText xxLarge bold>Rp {sale_price || price}</MyText>
                        {sale_price != "" && <View style={styles.containerDisc}>
                            <MyText style={styles.textDisc(colors.pink)} color={colors.red}>{_calcDisc(regular_price, sale_price)}%</MyText>
                            <MyText style={styles.priceDisc(colors.darkGray)} color={colors.darkGray}>Rp {regular_price}</MyText>
                        </View>}
                        <MyText xLarge style={styles.productTitle}>{name}</MyText>
                        <MyText>Terjual {total_sales}</MyText>
                    </View>
                    <Splitter large color={colors.lightGray} />
                    <View style={styles.innerContainer}>
                        <MyText xLarge bold>Detail Produk</MyText>
                        <View style={styles.rowDetail(colors.gray)}>
                            <MyText large color={colors.gray} style={styles.textDetail}>Kategori</MyText>
                            <MyText large color={colors.gray} style={styles.textDetail}>{categories}</MyText>
                        </View>
                        <View style={styles.rowDetail(colors.gray)}>
                            <MyText large color={colors.gray} style={styles.textDetail}>Min. Pemesanan</MyText>
                            <MyText large color={colors.gray} style={styles.textDetail}>1 Buah</MyText>
                        </View>
                        <View style={styles.rowDetail(colors.gray)}>
                            <MyText large color={colors.gray} style={styles.textDetail}>Etalase</MyText>
                            <MyText large color={colors.gray} style={styles.textDetail}>MASKER</MyText>
                        </View>
                        <MyText>{fullDesc && description || short_description}</MyText>
                        {!fullDesc && <TouchableOpacity onPress={() => setFulldesc(true)}><MyText colors={colors.primary} bold>Baca Selengkapnya</MyText></TouchableOpacity>}
                    </View>
                    <Splitter large color={colors.lightGray} />
                    <View style={styles.innerContainer}>
                        <View style={styles.containerStoreInfo}>
                            <MyImage source={ICON_SHOP} width={50} height={50} resizeMode={'contain'} />
                            <View style={styles.storeInfo}>
                                <MyText large bold>{store_name}</MyText>
                                <MyText color={colors.gray}>{store_address['city']}</MyText>
                            </View>
                        </View>
                        <View style={styles.detailStoreInfo}>
                            <Icon name={"star-outline"} size={20} style={styles.iconStoreInfo} />
                            <MyText bold>{average_rating}</MyText>
                            <MyText> rating produk</MyText>
                        </View>
                        <View style={styles.detailStoreInfo}>
                            <Icon name={"timer-outline"} size={20} style={styles.iconStoreInfo} />
                            <MyText bold>&plusmn; ? Jam</MyText>
                            <MyText> pesanan diproses</MyText>
                        </View>
                        <View style={styles.detailStoreInfo}>
                            <Icon name={"calendar-month"} size={20} style={styles.iconStoreInfo} />
                            <MyText bold>{moment(store_registered).format("MMM YYYY")}</MyText>
                            <MyText> mulai jualan</MyText>
                        </View>
                    </View>

                    <View style={styles.containerButton}>
                        <FormInputs.CustomButton
                            style={styles.button}
                            onSubmit={() => log("Ubah Produk")}
                            disabled={false}
                            submitLabel={"Ubah Produk"} />
                        <FormInputs.CustomButton
                            style={[styles.button, styles.secondaryButton(colors.white, colors.gray)]}
                            labelStyle={styles.labelStyle(colors.gray)}
                            onSubmit={() => log("Tanya Sekarang")}
                            disabled={false}
                            submitLabel={"Tanya Sekarang"} />
                    </View>
                </View>
            </ScrollView>
        </PageWrapper>
    )
})