import React, { memo, useEffect } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from 'react-native-paper';
import { PageWrapper, MyText } from "@Atoms";
import { Navbar } from '@Organisms';
import { FormStoreSocialSetup } from '@Templates';

import styles from "./styles";

export default memo((props) => {
    const { colors } = useTheme();
    return (
        <PageWrapper>
            <>
                <Navbar title={'Store Social Setup'} left={false} center />
                <View style={styles.skip}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('SetupSelesai')}>
                        <MyText xLarge bold color={colors.darkGray}>Lewati</MyText>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <ScrollView
                        scrollEventThrottle={16}
                        style={styles.container}
                        horizontal
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces>
                        <FormStoreSocialSetup {...props} />
                    </ScrollView>
                </View>
            </>
        </PageWrapper>
    )
})