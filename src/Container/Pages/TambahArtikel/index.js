import React, { memo } from "react";
import { View } from "react-native";
import { PageWrapper } from "@Atoms";
import { Navbar } from "@Organisms";

import styles from "./styles";

export default memo((props) => {
    return (
        <PageWrapper>
            <View style={styles.container}>
                <Navbar title={"Tambah Artikel"} />
            </View>
        </PageWrapper>
    )
})