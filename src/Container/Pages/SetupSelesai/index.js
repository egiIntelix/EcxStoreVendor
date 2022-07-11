import React, { memo } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useTheme } from 'react-native-paper';
import { PageWrapper, MyText } from "@Atoms";
import { ICON_ECENTRIX } from "@Images";
import { FormInputs } from '@Molecules';
import { log } from '@Utils';
import { reset } from '@RootNavigation';

import styles from "./styles";

export default memo(({ navigation: { navigate } }) => {
    const { colors } = useTheme();
    return (
        <PageWrapper>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Image source={ICON_ECENTRIX} />
                    <MyText xxLarge bold>Pengaturan dasar toko telah selesai!</MyText>
                    <MyText large center>Toko kamu sudah siap. Tambahkan produkmu dan mulailah menghitung penjualan. Have Fun!</MyText>
                    <FormInputs.CustomButton
                        submitLabel={'Dashboard'}
                        onSubmit={() => reset('Home')} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <MyText style={{ color: colors.gray }}>Cara menggunakan</MyText>
                        <TouchableOpacity onPress={() => log('Dashboard')}>
                            <MyText style={{ color: colors.primary }}> Dashboard?</MyText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </PageWrapper>
    )
})