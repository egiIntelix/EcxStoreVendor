import React from "react";
import { View, FlatList } from 'react-native';
import { useTheme } from "react-native-paper";
import { MyText } from '@Atoms';
import { CardPayment, PlaceholderProduct } from '@Molecules';
import { UUID } from '@Utils';

import styles from './styles';

export default ({ data, navigation }) => {
    const { colors } = useTheme();
    return (
        data && data.length > 0 &&
        <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={() => UUID()}
            renderItem={({ item }) => (
                <CardPayment data={item} onPress={() => console.log("DetailPembayaran")}/>
            )}
        />
        || data && <View style={styles.emptyProduct}>
            <MyText xxLarge bold>Belum ada pembayaran</MyText>
        </View>
        ||
        <PlaceholderProduct/>
    )
};

