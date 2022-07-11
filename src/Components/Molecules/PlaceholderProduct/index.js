import React from "react";
import { View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { useTheme } from "react-native-paper";
import styles from './styles';

export default (props) => {
    const { colors } = useTheme();
    return (
        ['', '', '', ''].map((item, key) =>
            <View style={styles.container(colors.white)} key={key}>
                <SkeletonPlaceholder>
                    <SkeletonPlaceholder.Item flexDirection="row">
                        <SkeletonPlaceholder.Item width={120} height={120} borderRadius={20} />
                        <SkeletonPlaceholder.Item marginLeft={20}>
                            <SkeletonPlaceholder.Item width={170} height={20} borderRadius={4} />
                            <SkeletonPlaceholder.Item marginTop={6} width={80} height={15} borderRadius={4} />
                            <SkeletonPlaceholder.Item flexDirection="row" marginTop={6}>
                                <SkeletonPlaceholder.Item width={100} height={15} borderRadius={4} />
                                <SkeletonPlaceholder.Item marginLeft={20} width={80} height={15} borderRadius={4} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            </View>
        )
    )
};

