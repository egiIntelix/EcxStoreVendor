import React, { memo, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme, TextInput } from "react-native-paper";
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
                <Navbar title={"Artikel"} />
                <TextInput
                    style={styles.search(colors.white)}
                    mode={'outlined'}
                    outlineColor={colors.gray}
                    activeOutlineColor={colors.primary}
                    onChangeText={(query) => log(query)}
                    placeholder={`Cari Artikel`}
                    left={<TextInput.Icon
                        style={styles.iconSearch}
                        name="magnify"
                        size={25}
                    />}
                />
            </View>
        </PageWrapper>
    )
})