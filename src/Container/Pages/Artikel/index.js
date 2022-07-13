import React, { memo, useEffect, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { PageWrapper } from "@Atoms";
import { Navbar, ListArticle, ManageArticleModal } from "@Organisms";
import { log } from "@Utils";

import styles from "./styles";

export default memo((props) => {
    const { colors } = useTheme();
    const refManageArticleModal = useRef(<ManageArticleModal />)
    const _manageArticle = (data) => refManageArticleModal?.current?.toggle(data)

    useEffect(() => {
        props.navBarState(false);
        return (() => {
            props.navBarState(true)
        })
    })
    return (
        <PageWrapper>
            <View style={styles.container}>
                <Navbar title={"Artikel"} right={() =>
                    <TouchableOpacity onPress={() => props.navigation.navigate("TambahArtikel")}>
                        <Icon name="plus" size={35} color={colors.black} />
                    </TouchableOpacity>
                } />
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
                <ListArticle data={['', '', '']} manageArticle={_manageArticle}/>
                <ManageArticleModal ref={refManageArticleModal} {...props} />
            </View>
        </PageWrapper >
    )
})