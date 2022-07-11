import React, {memo, useState} from 'react';
import { View, StyleSheet, Image } from 'react-native'
import Animated, { useAnimatedStyle, withTiming, } from 'react-native-reanimated';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { ICON_EMPTY_IMAGE } from '@Images'

export default memo(({ height = 100, width = 100, source = ICON_EMPTY_IMAGE, radius = [20, 20, 20, 20], resizeMode = 'cover', resizeMethod = 'resize' }) => {
    const [loaded, setLoaded] = useState(false);
    const animatedImageStyle = useAnimatedStyle(() => ({
        opacity: withTiming(loaded ? 1 : 0, { duration: 300 }),
        transform: [{ scale: withTiming(loaded ? 1 : .8, { duration: 300 }) }]
    }))
    const styles = StyleSheet.create({
        defaultStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: loaded ? 'transparent' : 'rgba(0,0,0,.05)',
            borderTopLeftRadius: radius[0],
            borderTopRightRadius: radius[1],
            borderBottomRightRadius: radius[2],
            borderBottomLeftRadius: radius[3],
            width,
            height
        }
    })
    const setLoad = () => setLoaded(true)
    return (
        <View style={{ width, height }}>
            <Animated.Image
                onLoadEnd={setLoad}
                source={source}
                style={[styles.defaultStyle, animatedImageStyle]}
                resizeMode={resizeMode}
                resizeMethod={resizeMethod}
            />
            {!loaded && <View style={styles.defaultStyle}>
                    <SkeletonPlaceholder>
                        <SkeletonPlaceholder.Item 
                            width={width} 
                            height={height}
                            borderTopLeftRadius={radius[0]} 
                            borderTopRightRadius={radius[1]}
                            borderBottomRightRadius={radius[2]}
                            borderBottomLeftRadius={radius[3]}
                            /> 
                    </SkeletonPlaceholder>
                </View>}
        </View>
    )
})