import React, { memo } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PageWrapper, MyText, Splitter, MyImage } from '@Atoms';
import { ICON_EMPTY_IMAGE, ICON_BCA } from '@Images';
import { Navbar } from '@Organisms';

import styles from './styles';

export default memo(() => {
    const { colors } = useTheme();
    return (
        <PageWrapper>
            <ScrollView>
                <View style={styles.container}>
                    <Navbar title={"Detail Pesanan"} />
                    <View style={styles.innerContainer}>
                        <MyText xxLarge bold>Pesanan #260</MyText>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Tanggal Pesanan</MyText>
                            <MyText style={styles.valueText}>17 Juni 2022 10:30 am</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Status Pesanan</MyText>
                            <MyText style={styles.valueText}>Dana dikembalikan</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Pembayaran</MyText>
                            <View style={styles.containerPembayaran}>
                                <Image source={ICON_BCA} style={styles.iconPembayaran} />
                                <MyText>BCA Virtual Account</MyText>
                            </View>
                        </View>
                    </View>
                    <Splitter xxLarge color={colors.lightGray} />
                    <View style={styles.innerContainer}>
                        <MyText xxLarge bold>Detail Pembayaran</MyText>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Nama</MyText>
                            <MyText style={styles.valueText} bold>Willy Andreas</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Alamat</MyText>
                            <MyText style={styles.valueText}>Jalan belimbing No 1 Bandung Jawa Barat 40193</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Email</MyText>
                            <MyText style={styles.valueText}>willyandreas@gmail.com</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Telepon</MyText>
                            <MyText style={styles.valueText}>081234567890</MyText>
                        </View>
                        <Splitter style={{marginVertical:8}}  />
                        <MyText xxLarge bold>Detail Pengiriman</MyText>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Nama</MyText>
                            <MyText style={styles.valueText} bold>Willy Andreas</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Alamat</MyText>
                            <MyText style={styles.valueText}>Jalan belimbing No 1 Bandung Jawa Barat 40193</MyText>
                        </View>
                        <View style={styles.row}>
                            <Icon name={'map-marker-outline'} size={25} color={colors.gray} />
                            <MyText>Cihapit, Bandung Wetan, Bandung, West Java, 40114, Indonesia</MyText>
                        </View>
                    </View>
                    <Splitter xxLarge color={colors.lightGray}/>
                    <View style={styles.innerContainer}>
                        <MyText xxLarge bold>Item Pesanan</MyText>
                        <View style={styles.row}>
                            <MyImage source={ICON_EMPTY_IMAGE} width={100} height={100} resizeMode={'contain'} />
                            <View style={styles.containerProduct}>
                                <MyText large bold style={styles.titleProduct}>[MOUSON] Masker KF 94 PRO/KN95 PRO</MyText>
                                <MyText color={colors.gray}>1 x Rp9500</MyText>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Total Harga (1 Barang)</MyText>
                            <MyText>Rp9500</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Total Ongkos Kirim</MyText>
                            <MyText>Rp0</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Asuransi</MyText>
                            <MyText>Rp0</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Biaya Tambahan Penjual</MyText>
                            <MyText>Rp0</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText xxLarge bold style={styles.titleText}>Total</MyText>
                            <MyText xxLarge bold>Rp9500</MyText>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </PageWrapper>
    )
})