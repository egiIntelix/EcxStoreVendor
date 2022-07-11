import React from "react";
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from "react-native-paper";
import { MyText, MyImage, Splitter } from '@Atoms';
import { ICON_EMPTY_IMAGE } from '@Images';
import { FormInputs } from "@Molecules";
import { log } from "@Utils";

import styles from './styles';

export default (props) => {
    const { colors } = useTheme();
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container(colors.white)} >
                <View style={styles.innerContainer}>
                    <MyImage source={ICON_EMPTY_IMAGE} height={100} width={100} resizeMode={'contain'} />
                    <View style={styles.containerInfo}>
                        <MyText large bold style={{ marginBottom: 12 }}>#260 - (nama pemesan)</MyText>
                        <MyText large bold>1x [MOUSON] Masker KF 94 PRO /KN95 PRO 5ply Model Korea</MyText>
                    </View>
                </View>
                <Splitter color={colors.lightGray} />
                <View style={{ padding: 12 }}>
                    <View style={styles.containerDisc}>
                        <MyText style={styles.textDisc(colors.pink)} color={colors.red}>12%</MyText>
                        <MyText style={styles.priceDisc(colors.darkGray)} color={colors.darkGray}>Rp 15000</MyText>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <MyText large bold>Rp 9500</MyText>
                            <View style={{flexDirection:'row', alignItems:'center', marginTop:8}}>
                                <Icon name={'map-marker-outline'} size={25} color={colors.gray} />
                                <MyText large>Jl. Lorem ipsum</MyText>
                            </View>
                        </View>
                        <View>
                            <MyText large right>17 Jun 2022</MyText>
                            <MyText large right>10:30 AM</MyText>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

