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
            <>
            <View style={styles.skip}>
                <TouchableOpacity onPress={() => navigate('StoreSetup')}>
                    <MyText xLarge bold color={colors.darkGray}>Lewati</MyText>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Image source={ICON_ECENTRIX} />
                    <MyText xxLarge bold>Selamat Datang!</MyText>
                    <MyText large center>Lanjut untuk setup tokomu sekarang. Atau kamu bisa lewati dan mengatur tokomu dari menu dashboard &#62; pengaturan kapan saja!</MyText>
                    <FormInputs.CustomButton
                        submitLabel={'Lanjut'}
                        onSubmit={() => navigate('StoreSetup')} />
                </View>
            </View>
            </>
        </PageWrapper>
    )
})