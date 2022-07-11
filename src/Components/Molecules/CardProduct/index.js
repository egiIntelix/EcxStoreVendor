import React from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from "react-native-paper";
import { MyText, MyImage } from '@Atoms';
import { ICON_EMPTY_IMAGE } from '@Images';
import { FormInputs  } from "@Molecules";
import { log } from "@Utils";

import styles from './styles';

export default ({ data : { image, stock_quantity, status, price, name }, editPrice, editStock, manageProduct }) => {
    const { colors } = useTheme();
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container(colors.white)} >
                <View style={styles.innerContainer}>
                    <MyImage source={image && { uri: image[0] } || ICON_EMPTY_IMAGE} height={100} width={100} resizeMode={'contain'} />
                    <View style={styles.containerInfo}>
                        <MyText large bold>{name}</MyText>
                        <MyText style={styles.text} medium>Rp {price}</MyText>
                        <View style={{ flexDirection: 'row' }}>
                            <MyText style={styles.text} medium color={colors.gray}>Stok: </MyText>
                            <MyText style={styles.text} medium>{stock_quantity}</MyText>
                            <View style={styles.badges(status == "publish" ? colors.primary : colors.gray)}>
                                <MyText bold color={colors.white} style={styles.badgesText}>{status}</MyText>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.containerButton}>
                    <FormInputs.CustomSecondaryButton onPress={editPrice} title={"Ubah Harga"}/> 
                    <FormInputs.CustomSecondaryButton onPress={editStock} title={"Ubah Stok"}/> 
                    <TouchableOpacity onPress={manageProduct}>
                        <Icon name="dots-vertical" size={35} color={colors.black} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

