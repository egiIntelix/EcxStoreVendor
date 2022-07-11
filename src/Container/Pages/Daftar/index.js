import React, { memo } from "react";
import { View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { useTheme } from 'react-native-paper';
import { PageWrapper, MyText } from "@Atoms";
import { Navbar } from '@Organisms';
import { FormDaftar } from '@Templates';
import { reset } from '@RootNavigation';

import styles from "./styles";

export default memo((props) => {
    const { colors } = useTheme();
    return (
        <PageWrapper>
            <>
                <Navbar title={'Daftar'} right={() => <TouchableWithoutFeedback onPress={() => reset('Login')}>
                    <MyText bold xLarge style={{ color: colors.primary }}>Masuk</MyText>
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
                        <FormDaftar {...props} />
                    </ScrollView>
                </View>


            </>
        </PageWrapper>
    )
})