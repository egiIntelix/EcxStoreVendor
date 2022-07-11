import React, { memo } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useTheme } from 'react-native-paper';
import { PageWrapper, MyText } from "@Atoms";
import {ICON_ECENTRIX} from "@Images";
import { FormInputs } from '@Molecules';
import {log} from '@Utils';

import styles from "./styles";

export default memo(({ navigation: { navigate } }) => {
    const { colors } = useTheme();
    return (
        <PageWrapper>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Image source={ICON_ECENTRIX} />
                    <MyText xxLarge bold>Ciptakan Peluangmu!</MyText>
                    <MyText large center>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum suscipit nihil eaque ipsam alias modi vitae voluptas optio</MyText>
                    <FormInputs.CustomButton
                        submitLabel={'Buka Toko Gratis'}
                        onSubmit={() => navigate('Daftar')} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <MyText style={{ color: colors.gray }}>Tokomu hilang?</MyText>
                        <TouchableOpacity onPress={() => log('Pelajari selengkapnya')}>
                            <MyText style={{ color: colors.primary }}> Pelajari Selengkapnya.</MyText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </PageWrapper>
    )
})