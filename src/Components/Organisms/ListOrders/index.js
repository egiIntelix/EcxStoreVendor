import React from "react";
import { View, FlatList } from 'react-native';
import { useTheme } from "react-native-paper";
import { MyText } from '@Atoms';
import { CardOrders, PlaceholderProduct } from '@Molecules';
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
                <CardOrders data={item} onPress={() => navigation.navigate("DetailPesanan")}/>
            )}
        />
        || data && <View style={styles.emptyProduct}>
            <MyText xxLarge bold>Belum ada pesanan, nih </MyText>
            <MyText center large color={colors.gray}>Tetap semangat, rezeki nggak akan pergi asal kamu pantang menyerah</MyText>
        </View>
        ||
        <PlaceholderProduct/>
    )
};

