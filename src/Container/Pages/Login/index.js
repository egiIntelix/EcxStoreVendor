import React, { memo, useEffect } from "react";
import { View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { useTheme } from 'react-native-paper';
import { PageWrapper, MyText } from "@Atoms";
import { Navbar } from '@Organisms';
import { FormLogin } from '@Templates';

import styles from "./styles";

export default memo((props) => {
    const { colors } = useTheme();
    return (
        <PageWrapper>
            <>
                <Navbar title={'Masuk'} left={false} right={() => <TouchableWithoutFeedback onPress={() => props.navigation.navigate('BukaToko')}>
                    <MyText bold xLarge style={{ color: colors.primary }}>Daftar</MyText>
                </TouchableWithoutFeedback>} />
                <View style={styles.container}>
                    <ScrollView
                        scrollEventThrottle={16}
                        style={styles.container}
                        horizontal
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces>
                        <FormLogin {...props} />
                    </ScrollView>
                </View>
            </>
        </PageWrapper>
    )
})