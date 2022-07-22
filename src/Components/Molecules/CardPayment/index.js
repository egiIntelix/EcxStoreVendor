import React from "react";
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import moment from "moment";
import { useTheme } from "react-native-paper";
import { MyText, MyImage, Splitter } from '@Atoms';
import { ICON_EMPTY_IMAGE } from '@Images';
import { log } from "@Utils";

import styles from './styles';

export default ({data, onPress}) => {
    const { colors } = useTheme();
    return (
        <TouchableWithoutFeedback>
            <TouchableOpacity onPress={onPress} activeOpacity={.8}>
                <View style={styles.container(colors.white)} >
                    <View style={styles.innerContainer}>
                        <MyImage source={ICON_EMPTY_IMAGE} height={100} width={100} resizeMode={'contain'} />
                        <View style={styles.containerInfo}>
                            <MyText large style={styles.textInfo}>#INV206</MyText>
                            <MyText large style={styles.textInfo}>#00162</MyText>
                            <MyText large>x1</MyText>
                        </View>
                        <MyText large>17 Jun 2022</MyText>
                    </View>
                    <Splitter color={colors.lightGray} />
                </View>
            </TouchableOpacity>
        </TouchableWithoutFeedback>
    )
};

