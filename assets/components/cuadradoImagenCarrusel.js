import { StyleSheet, View, ScrollView, Image, useWindowDimensions, Pressable } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, interpolate, useAnimatedRef } from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native';


const CuadradoImagenCarrusel = ({ data, onImagePress, autoPlay }) => {
    
    const navigation = useNavigation();
    const scrollViewRef = useAnimatedRef(null);
    const interval = useRef();
    const [newData] = useState([
        { key: "spacer-left" },
        ...data,
        { key: "spacer-right" }]);
    const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
    const { width } = useWindowDimensions();
    const SIZE = width * 0.7;
    const SPACER = (width - SIZE) / 2;
    const x = useSharedValue(0);
    const offSet = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        },
        onMomentumEnd: e => {
            offSet.value = e.contentOffset.x;
        },
    });

    useEffect(() => {
        if (isAutoPlay === true) {
            let _offSet = offSet.value;
            interval.current = setInterval(() => {
                if (_offSet >= Math.floor(SIZE * (data.length - 1) - 10)) {
                    _offSet = 0
                }
                else {
                    _offSet = Math.floor(_offSet + SIZE);
                }
                scrollViewRef.current.scrollTo({ x: _offSet, y: 0 })
            }, 2000);
        }
        else {
            clearInterval(interval.current);
        }
        return () => {
            clearInterval(interval.current);
        };
    }, [SIZE, SPACER, isAutoPlay, data.length, offSet.value, scrollViewRef]);
  
    return (
        <Animated.ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
            snapToInterval={SIZE}
            decelerationRate="fast"
            onScroll={onScroll}
            onScrollBeginDrag={e => {
                setIsAutoPlay(true);
            }}
            onMomentumScrollEnd={() => {
                setIsAutoPlay(true);
            }}
        >
            {newData.map((item, index) => {

                const style = useAnimatedStyle(() => {
                    const scale = interpolate(
                        x.value,
                        [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                        [0.8, 1, 0.8]
                    )
                    return {
                        transform: [{ scale }],
                    }
                });

                if (!item.image) {
                    return <View style={{ width: SPACER }} key={index} />;
                }

                return (
                    <Pressable key={index} onPress={() => navigation.nagivate('MovieDetails', {item})}>
                        <View style={{ width: SIZE }} key={index}>
                            <Animated.View style={[styles.imageContainer, style]}>
                                <Image
                                    source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                                    style={styles.image}
                                />
                            </Animated.View>
                        </View>
                    </Pressable>
                )
            })}
        </Animated.ScrollView>
    );
};

export default CuadradoImagenCarrusel;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 25,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    }
})