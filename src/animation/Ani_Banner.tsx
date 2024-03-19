import React from 'react'
import Images from '../config/images'
import Animated, { withTiming, withDelay, useAnimatedStyle, useSharedValue, } from 'react-native-reanimated'

const values = {
    delay: 400,
    duration: 1200,
    EndValue: 1,
    startValue: 0,
}

const Ani_Banner = () => {

    const visible = useSharedValue(values.startValue);
    const animatedStyle = useAnimatedStyle(() => ({
        opacity: visible.value
    }));

    React.useEffect(() => {
        visible.value = withDelay(values.delay, withTiming(values.EndValue, {
            duration: values.duration
        }))
    }, [])

    return (
        <Animated.Image
            source={Images.banner}
            style={[animatedStyle, { height: 300, marginTop: 10, width: '100%', resizeMode: "contain" }]}
        />
    )
}

export default Ani_Banner