import React from "react";
import { View, FlatList } from 'react-native';
import { useTheme } from "react-native-paper";
import { MyText } from '@Atoms';
import { CardArticle, PlaceholderArticle } from '@Molecules';
import { UUID } from '@Utils';

import styles from './styles';

export default ({ data, manageArticle, navigation }) => {
    const { colors } = useTheme();
    return (
        data && data.length > 0 &&
        <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={() => UUID()}
            renderItem={({ item }) => (
                <CardArticle data={item} onPress={() => manageArticle(item)}/>
            )}
        />
        || data && <View style={styles.emptyProduct}>
            <MyText xxLarge bold>Belum ada artikel </MyText>
        </View>
        ||
        <PlaceholderArticle/>
    )
};

