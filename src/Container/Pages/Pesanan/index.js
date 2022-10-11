import React, { memo } from "react";
import { View } from "react-native";
import { useTheme, TextInput } from "react-native-paper";
import { PageWrapper } from "@Atoms";
import { Navbar, ListOrders } from "@Organisms";
import { log } from "@Utils";

import styles from "./styles";

const data = [
    {
        customer_id: 14,
        id: 260,
        total: "34400",
        order_date: "2022-06-07 10:30:11",
        payment_method_title: "Bank Transfer - BCA",
        payment_method: "xendit_bcava",
        status: "processing",
        shipping_total: "15000",
        billing: {
            first_name: "Asasasas",
            last_name: "asasdasd",
            company: "",
            address_1: "Jalan belimbing no 1",
            address_2: "",
            city: "Bandung",
            state: "JB",
            postcode: "40193",
            country: "ID",
            email: "user1@ecentrix.co.id",
            phone: "080091023809421"
        },
        shipping: {
            first_name: "Asasasas",
            last_name: "asasdasd",
            company: "",
            address_1: "Jalan belimbing no 1",
            address_2: "",
            city: "Bandung",
            state: "JB",
            postcode: "40193",
            country: "ID",
            phone: ""
        },
        fee: [
            {
                name: "Bank Transfer - BCA",
                total: "5000"
            },
            {
                name: "Biaya Platform",
                total: "4000"
            }
        ],
        items: [
            {
                id: 91,
                name: "Amoxicillin 500 mg",
                price: "10400",
                qty: 1,
                total: "10400",
                image_id: "90",
                // image: [
                //     "https:\/\/app74.ecentrix.net\/ecx_store\/wp-content\/uploads\/2022\/06\/obat4.png",
                //     467,
                //     413,
                //     false
                // ],
                image: "",
                store_id: "2",
                store_name: "TokoPertama",
                store_url: "https:\/\/app74.ecentrix.net\/ecx_store\/store\/tokopertama\/",
                store_address: {
                    street_1: "Jalan Belimbing No1",
                    street_2: "",
                    city: "Bandung",
                    zip: "40114",
                    country: "ID",
                    state: "JB"
                },
                store_registered: "2022-06-02 03:48:23"
            },
        ]
    }
]
export default memo((props) => {
    const { colors } = useTheme();
    return (
        <PageWrapper>
            <View style={styles.container}>
                <Navbar title={"Daftar Pesanan"} left={false} />
                <TextInput
                    style={styles.search(colors.white)}
                    mode={'outlined'}
                    outlineColor={colors.gray}
                    activeOutlineColor={colors.primary}
                    onChangeText={(query) => log(query)}
                    placeholder={`Cari nama pembeli, produk, resi`}
                    left={<TextInput.Icon
                        style={styles.iconSearch}
                        name="magnify"
                        size={25}
                    />}
                />
                <ListOrders data={data} {...props} />
            </View>
        </PageWrapper>
    )
})