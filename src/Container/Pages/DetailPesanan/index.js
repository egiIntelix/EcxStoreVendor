import React, { memo, useEffect } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PageWrapper, MyText, Splitter, MyImage } from '@Atoms';
import { ICON_EMPTY_IMAGE, ICON_BCA } from '@Images';
import { Navbar } from '@Organisms';
import { log } from '@Utils';

import styles from './styles';

const payment_icon = (name) => {
    switch (name) {
        case 'xendit_bcava':
            return ICON_BCA;
        default:
            return null
    }

}
export default memo(({ navigation, navBarState, route: { params } }) => {
    const { colors } = useTheme();
    const {
        id,
        order_date,
        status,
        payment_method_title,
        billing: { first_name, last_name, address_1, address_2, city, postcode, email, phone },
        shipping,
        items,
        shipping_total,
        fee,
        total,
        payment_method,
    } = params;
    const _totalBarang = items.map(item => parseInt(item.qty)).reduce((partialSum, a) => partialSum + a, 0);
    const _totalHarga = items.map(item => parseInt(item.total)).reduce((partialSum, a) => partialSum + a, 0);
    const _paymentIcon = payment_icon(payment_method);
    useEffect(() => {
        navBarState(false);
        return (() => navBarState(true))
    })
    return (
        <PageWrapper>
            <ScrollView>
                <View style={styles.container}>
                    <Navbar title={"Detail Pesanan"} />
                    <View style={styles.innerContainer}>
                        <MyText xxLarge bold>Pesanan #{id}</MyText>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Tanggal Pesanan</MyText>
                            <MyText style={styles.valueText}>{moment(order_date).format("DD MMMM YYYY h:mm a")}</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Status Pesanan</MyText>
                            <MyText style={styles.valueText}>{status}</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Pembayaran</MyText>
                            <View style={styles.containerPembayaran}>
                                {_paymentIcon && <Image source={_paymentIcon} style={styles.iconPembayaran} />}
                                <MyText>{payment_method_title}</MyText>
                            </View>
                        </View>
                    </View>
                    <Splitter xxLarge color={colors.lightGray} />
                    <View style={styles.innerContainer}>
                        <MyText xxLarge bold>Detail Pembayaran</MyText>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Nama</MyText>
                            <MyText style={styles.valueText} bold>{`${first_name} ${last_name}`}</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Alamat</MyText>
                            <MyText style={styles.valueText}>{`${address_1} ${address_2} ${city} ${postcode}`}</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Email</MyText>
                            <MyText style={styles.valueText}>{email}</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Telepon</MyText>
                            <MyText style={styles.valueText}>{phone}</MyText>
                        </View>
                        <Splitter style={{ marginVertical: 8 }} />
                        <MyText xxLarge bold>Detail Pengiriman</MyText>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Nama</MyText>
                            <MyText style={styles.valueText} bold>{`${shipping.first_name} ${shipping.last_name}`}</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Alamat</MyText>
                            <MyText style={styles.valueText}>{`${shipping.address_1} ${shipping.address_2} ${shipping.city} ${shipping.postcode}`}</MyText>
                        </View>
                        <View style={styles.row}>
                            <Icon name={'map-marker-outline'} size={25} color={colors.gray} />
                            <MyText>{`${shipping.address_1} ${shipping.address_2} ${shipping.city} ${shipping.postcode}`}</MyText>
                        </View>
                    </View>
                    <Splitter xxLarge color={colors.lightGray} />
                    <View style={styles.innerContainer}>
                        <MyText xxLarge bold>Item Pesanan</MyText>
                        {items.map((item, key) =>
                            <View style={styles.row} key={`${key}-${item.id}`}>
                                <MyImage source={item.image && { uri: item.image[0] } || ICON_EMPTY_IMAGE} width={100} height={100} resizeMode={'contain'} />
                                <View style={styles.containerProduct}>
                                    <MyText large bold style={styles.titleProduct}>{item.name}</MyText>
                                    <MyText color={colors.gray}>{`${item.qty}x Rp${item.price}`}</MyText>
                                </View>
                            </View>
                        )}
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>{`Total Harga (${_totalBarang} Barang)`}</MyText>
                            <MyText>{`Rp${_totalHarga}`}</MyText>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.titleText}>Total Ongkos Kirim</MyText>
                            <MyText>{`Rp${shipping_total}`}</MyText>
                        </View>
                        {fee.map((item, key) =>
                            <View style={styles.row} key={`${key}-${item.name}`}>
                                <MyText style={styles.titleText}>{item.name}</MyText>
                                <MyText>{`Rp${item.total}`}</MyText>
                            </View>
                        )}
                        <View style={styles.row}>
                            <MyText xxLarge bold style={styles.titleText}>Total</MyText>
                            <MyText xxLarge bold>{`Rp${total}`}</MyText>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </PageWrapper>
    )
})