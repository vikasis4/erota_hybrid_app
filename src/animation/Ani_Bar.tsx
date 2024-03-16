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
    type: string,
    style: {}
}


const Ani_Bar = ({ children, style, type }: animatePropType) => {

    const values = {
        delay: 400,
        duration: 800,
        EndValue: 0,
        startValue: type == 'Navbar' ? -200 : 200,
    }

    const translateY = useSharedValue(values.startValue);
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }]
    }));
    React.useEffect(() => {
        translateY.value = withDelay(values.delay, withTiming(values.EndValue, {
            duration: values.duration,
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

export default Ani_Bar