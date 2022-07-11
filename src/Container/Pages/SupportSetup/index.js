import React, { memo, useEffect } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from 'react-native-paper';
import { PageWrapper, MyText } from "@Atoms";
import { Navbar } from '@Organisms';
import { FormSupportSetup } from '@Templates';

import styles from "./styles";

export default memo((props) => {
    const { colors } = useTheme();
    return (
        <PageWrapper>
            <>
                <Navbar title={'Support Setup'} left={false} center />
                <View style={styles.skip}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('StoreSeoSetup')}>
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
                        <FormSupportSetup {...props} />
                    </ScrollView>
                </View>
            </>
        </PageWrapper>
    )
})