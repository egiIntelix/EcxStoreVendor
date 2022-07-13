import React from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import { MyImage, MyText } from "@Atoms";
import { ICON_EMPTY_IMAGE } from "@Images";

import styles from "./styles";

export default ({onPress}) => {
    const { colors } = useTheme();
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container(colors.white)}>
                <MyImage source={ICON_EMPTY_IMAGE} height={200} width={'100%'} resizeMode={"cover"} />
                <View style={styles.innerContainer}>
                    <MyText bold large>Pentingnya Belanja Online</MyText>
                    <View style={styles.containerInfo}>
                        <View style={styles.info}>
                            <View style={styles.containerStatus}>
                                <MyText bold color={colors.white} style={styles.badges(colors.primary)}>Dipublikasikan</MyText>
                                <MyText>0 view</MyText>
                            </View>
                            <MyText>15 Jun 2022</MyText>
                        </View>
                        <TouchableOpacity style={styles.buttonOption} onPress={onPress}>
                            <Icon name="dots-vertical" size={35} color={colors.black} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}