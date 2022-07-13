import React, { memo, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import { PageWrapper } from "@Atoms";
import { Navbar, ListProduct, EditPriceModal, EditStockModal, ManageProductModal } from "@Organisms";
import { log } from "@Utils";

import styles from "./styles";
const data = [
    {
        name: 'Produk gambar array',
        categories: 'Umum',
        description: "Deskripsi produk gambar array Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore nemo error, fugiat minima a quisquam, voluptates accusantium quia neque explicabo? Repellat vero fugit iusto fuga unde. Eos, cum qui!",
        short_description: "Deskripsi singkat produk gambar array",
        price: '150000',
        regular_price: '150000',
        sale_price: '',
        stock_quantity: '10',
        status: 'publish',
        total_sales: '10',
        average_rating: "0",
        image: [
            "https://app74.ecentrix.net/ecx_store/wp-content/uploads/2022/06/9121c41e80bf4534c11da52988ff1145_0.jpg",
            1792,
            1792,
            false
        ],
        store_id: "18",
        store_name: "test nama toko",
        store_address: {
            street_1: "Jalan test store addr 1",
            street_2: "Jalan test store addr 2",
            city: "Bandung",
            zip: "40114",
            country: "ID",
            state: "JB"
        },
        store_registered: "2022-06-15 06:21:06"
    },
    {
        name: 'Masker',
        categories : 'Alat Kesehatan',
        description: "Deskripsi masker Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore nemo error, fugiat minima a quisquam, voluptates accusantium quia neque explicabo? Repellat vero fugit iusto fuga unde. Eos, cum qui!",
        short_description: "Deskripsi singkat masker",
        price: '30000',
        regular_price: '30000',
        sale_price: '12000',
        stock_quantity: null,
        status: 'archived',
        total_sales: '0',
        average_rating: "0",
        image: "",
        store_id: "18",
        store_name: "test nama toko",
        store_address: {
            street_1: "Jalan test store addr 1",
            street_2: "Jalan test store addr 2",
            city: "Bandung",
            zip: "40114",
            country: "ID",
            state: "JB"
        },
        store_registered: "2022-06-15 06:21:06"
    },
];
export default memo((props) => {
    const { colors } = useTheme();
    const refEditPriceModal = useRef(<EditPriceModal />);
    const refEditStockModal = useRef(<EditStockModal />);
    const refManageProductModal = useRef(<ManageProductModal />);
    const _editPrice = (data) => refEditPriceModal?.current?.toggle(data)
    const _editStock = (data) => refEditStockModal?.current?.toggle(data)
    const _manageProduct = (data) => refManageProductModal?.current?.toggle(data)

    const _onSavePrice = (data) => {
        refEditPriceModal?.current?.setVisible();
        log(data);
    }
    const _onSaveStock = (data) => {
        refEditStockModal?.current?.setVisible();
        log(data);
    }
    
    return (
        <PageWrapper>
            <View style={styles.container}>
                <Navbar title={"Daftar Produk"} left={false} right={() => (
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('TambahProduk')}>
                            <Icon name="plus" size={35} color={colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="dots-vertical" size={35} color={colors.black} />
                        </TouchableOpacity>
                    </View>
                )} />
                <TextInput
                    style={styles.search(colors.white)}
                    mode={'outlined'}
                    outlineColor={colors.gray}
                    activeOutlineColor={colors.primary}
                    onChangeText={(query) => log(query)}
                    placeholder={`Cari Produk`}
                    left={<TextInput.Icon
                        style={styles.iconSearch}
                        name="magnify"
                        size={25}
                    />}
                />
                <ListProduct
                    data={data}
                    editPrice={_editPrice}
                    editStock={_editStock}
                    manageProduct={_manageProduct} />
                <EditPriceModal ref={refEditPriceModal} onSave={_onSavePrice} />
                <EditStockModal ref={refEditStockModal} onSave={_onSaveStock} />
                <ManageProductModal ref={refManageProductModal} {...props} />
            </View>
        </PageWrapper>
    )
})