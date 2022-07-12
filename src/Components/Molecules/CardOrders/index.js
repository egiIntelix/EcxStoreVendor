import React from "react";
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from "moment";
import { useTheme } from "react-native-paper";
import { MyText, MyImage, Splitter } from '@Atoms';
import { ICON_EMPTY_IMAGE } from '@Images';
import { log } from "@Utils";

import styles from './styles';

export default ({data: {id, billing: {first_name, last_name}, total, shipping: {address_1, address_2}, items, order_date}, onPress}) => {
    const { colors } = useTheme();
    const [{qty, name, image}] = items;
    return (
        <TouchableWithoutFeedback>
            <TouchableOpacity onPress={onPress} activeOpacity={.8}>
                <View style={styles.container(colors.white)} >
                    <View style={styles.innerContainer}>
                        <MyImage source={image && { uri: image[0] } || ICON_EMPTY_IMAGE} height={100} width={100} resizeMode={'contain'} />
                        <View style={styles.containerInfo}>
                            <MyText large bold style={{ marginBottom: 12 }}>{`#${id} - ${first_name} ${last_name}`}</MyText>
                            <MyText large bold>{`${qty}x ${name}`}</MyText>
                        </View>
                    </View>
                    <Splitter color={colors.lightGray} />
                    <View style={{ padding: 12 }}>
                        {/* <View style={styles.containerDisc}>
                            <MyText style={styles.textDisc(colors.pink)} color={colors.red}>12%</MyText>
                            <MyText style={styles.priceDisc(colors.darkGray)} color={colors.darkGray}>Rp 15000</MyText>
                        </View> */}
                        <View style={styles.containerInfoTrx}>
                            <View>
                                <MyText large bold>Rp {total}</MyText>
                                <View style={styles.shippingAddr}>
                                    <Icon name={'map-marker-outline'} size={25} color={colors.gray} />
                                    <MyText large>{`${address_1} ${address_2}`}</MyText>
                                </View>
                            </View>
                            <View>
                                <MyText large right>{moment(order_date).format("DD MMM YYYY")}</MyText>
                                <MyText large right>{moment(order_date).format("h:mm a")}</MyText>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </TouchableWithoutFeedback>
    )
};

