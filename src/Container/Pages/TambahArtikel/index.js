import React, { memo } from "react";
import { View, ScrollView } from "react-native";
import { PageWrapper } from "@Atoms";
import { Navbar } from "@Organisms";
import { FormAddArticle } from "@Templates";

import styles from "./styles";

export default memo((props) => {
    return (
        <PageWrapper>
            <>
                <Navbar title={"Tambah Artikel"} />
                <View style={styles.container}>
                    <ScrollView
                        scrollEventThrottle={16}
                        style={styles.container}
                        horizontal
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces>
                        <FormAddArticle {...props} />
                    </ScrollView>
                </View>
            </>
        </PageWrapper>
    )
})