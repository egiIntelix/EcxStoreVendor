import React, { memo } from "react";
import { View } from "react-native";
import { useTheme, TextInput } from "react-native-paper";
import { PageWrapper } from "@Atoms";
import { Navbar, ListOrders } from "@Organisms";
import { log } from "@Utils";

import styles from "./styles";

export default memo((props) => {
    const { colors } = useTheme();
    return (
        <PageWrapper>
            <View style={styles.container}>
                <Navbar title={"Daftar Pesanan"} left={false}/>
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
                <ListOrders data={['', '', '']} {...props} />
            </View>
        </PageWrapper>
    )
})