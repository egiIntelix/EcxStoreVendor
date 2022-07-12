import React, { forwardRef } from "react";
import { View, FlatList, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import { MyText, Splitter } from '@Atoms';
import { UUID } from '@Utils';

import styles from './styles';

export default ({ data, header }) => {
    const { colors } = useTheme();
    return (
        <>
            {header && <View style={styles.headerStyle}>{header()}</View> || null}
            {data.map((item, key) => {
                let { title, iconName, type = 'menu', onPress, itemProps } = item;
                return (
                    type == 'menu' ?
                        <TouchableOpacity
                            activeOpacity={.8}
                            onPress={onPress}
                            key={UUID()}>
                            <View style={styles.listItem(colors.white)}>
                                {iconName && <Icon name={iconName} size={40} color={colors.black} style={styles.icon} />}
                                <MyText xLarge {...itemProps}>{title}</MyText>
                            </View>
                        </TouchableOpacity>
                        :
                        <Splitter xxLarge color={colors.lightGray} />
                )
            })}
        </>
        // <FlatList
        //     showsVerticalScrollIndicator={false}
        //     ListHeaderComponent={header && header() || null}
        //     ListHeaderComponentStyle={styles.headerStyle}
        //     data={data}
        //     keyExtractor={() => UUID()}
        //     renderItem={({ item: { title, iconName, type = 'menu', onPress, itemProps} }) => (
        //         type == 'menu' ?
        //             <TouchableOpacity
        //                 activeOpacity={.8}
        //                 onPress={onPress}>
        //                 <View style={styles.listItem(colors.white)}>
        //                     {iconName && <Icon name={iconName} size={40} color={colors.black} style={styles.icon} />}
        //                     <MyText xLarge {...itemProps}>{title}</MyText>
        //                 </View>
        //             </TouchableOpacity>
        //             :
        //             <Splitter xxLarge color={colors.lightGray} />
        //     )}
        // />
    )
};

