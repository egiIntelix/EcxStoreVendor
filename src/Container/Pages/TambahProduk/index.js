import React, { memo, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import { PageWrapper } from "@Atoms";
import { Navbar } from "@Organisms";

import styles from "./styles";

export default memo(({ navigation, navBarState }) => {
    const { colors } = useTheme();
    useEffect(() => {
        navBarState(false);
        return(() => {
            navBarState(true)
        })
    })
    return (
        <PageWrapper>
            <View style={styles.container}>
                <Navbar title={"Tambah Produk"} />
            </View>
        </PageWrapper>
    )
})