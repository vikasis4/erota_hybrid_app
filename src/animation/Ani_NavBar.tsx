import React from 'react'
import Animated, {
    ReduceMotion,
    withDelay,
    withTiming,
    useAnimatedStyle,
    useSharedValue,
    Easing
} from 'react-native-reanimated'

type animatePropType = {
    children: React.JSX.Element,
    style: {}
}

const Ani_NavBar = ({ children, style }: animatePropType) => {

    const translateY = useSharedValue(-200);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }]
    }));

    React.useEffect(() => {
        translateY.value = withDelay(400, withTiming(0, {
            duration: 800,
            easing: Easing.inOut(Easing.quad),
            reduceMotion: ReduceMotion.System,
        }))
    }, [])

    return (
        <Animated.View style={[style, animatedStyle]}>
            {children}
        </Animated.View>
    )
}

export default Ani_NavBar