import React from "react";
import { View, FlatList } from 'react-native';
import { MyText } from '@Atoms';
import { CardProduct, PlaceholderProduct } from '@Molecules';
import { UUID } from '@Utils';

import styles from './styles';

export default ({ data, editPrice, editStock, manageProduct }) => {
    return (
        data && data.length > 0 &&
        <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={() => UUID()}
            renderItem={({ item }) => (
                <CardProduct 
                    data={item} 
                    editPrice={() => editPrice(item)} 
                    editStock={() => editStock(item)} 
                    manageProduct={() => manageProduct(item)} />
            )}
        />
        || data && <View style={styles.emptyProduct}>
            <MyText xxLarge>Ayo tambahkan produk pertamamu! </MyText>
        </View>
        ||
        <PlaceholderProduct/>
    )
};

