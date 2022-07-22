import React, { memo, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import { PageWrapper } from "@Atoms";
import { Navbar, ListPayment } from "@Organisms";

import styles from "./styles";

export default memo((props) => {
    const { colors } = useTheme();
    useEffect(() => {
        props.navBarState(false);
        return(() => {
            props.navBarState(true)
        })
    })
    return (
        <PageWrapper>
            <View style={styles.container}>
                <Navbar title={"Pembayaran"} />
                <ListPayment data={['']} {...props} />
            </View>
        </PageWrapper>
    )
})