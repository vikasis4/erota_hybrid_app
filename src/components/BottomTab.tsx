import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Theme from '../theme'
import Images from '../config/images';
import Ani_Bar from '../animation/Ani_Bar';

const BottomTab = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={{ backgroundColor: Theme.colors.primary }}>
            <Ani_Bar type="BottomTab" style={styles.outer}>
                <View style={styles.main}>
                    {state.routes.map((route: any, index: any) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name, route.params);
                            }
                        };

                        const selectImg = {
                            HOME: {
                                'true': Images.thome,
                                'false': Images.fhome
                            },
                            ORDER: {
                                'true': Images.torder,
                                'false': Images.forder
                            },
                            PROFILE: {
                                'true': Images.tuser,
                                'false': Images.fuser
                            },
                            SUPPORT: {
                                'true': Images.tphone,
                                'false': Images.fphone
                            },
                        }
                        var img = label as keyof typeof selectImg
                        var newImg = selectImg[img]
                        var renderImg = isFocused ? newImg['true'] : newImg['false'];

                        return (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.7}
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                            >
                                <Image source={renderImg} style={styles.img} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </Ani_Bar>
        </View>
    );
}

export default BottomTab

const styles = StyleSheet.create({
    img: {
        height: 30,
        width: 30,
        resizeMode: 'cover'
    },
    outer: {
        height: 70,
        paddingBottom: 20,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Theme.colors.primary,
    },
    main: {
        backgroundColor: Theme.colors.primary,
        flex: 1,
        elevation: 6,
        borderRadius: 8,
        width: '90%',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})