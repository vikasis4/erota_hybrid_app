import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Theme from '../theme'
import Images from '../config/images'
import Ani_Bar from '../animation/Ani_Bar'

const NavBar = ({ nav }: { nav: NativeStackScreenProps<any, any> }) => {

    return (
        <Ani_Bar type="Navbar" style={styles.outer}>
            <View style={styles.main}>
                <Text style={styles.txt}>Erota</Text>
                <View style={styles.inner}>
                    <TouchableOpacity onPress={() => console.log('Bag Screen')} >
                        <Image source={Images.bag} style={styles.img} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Profile Screen')} >
                        <Image source={Images.profile} style={styles.img} />
                    </TouchableOpacity>
                </View>
            </View>
        </Ani_Bar>
    )
}

export default NavBar

const styles = StyleSheet.create({
    img: {
        height: 38,
        width: 38,
        resizeMode: 'cover'
    },
    txt: {
        fontFamily: Theme.fonts.xl,
        fontSize: Theme.fontSizes['xl'],
        color: Theme.colors.secondary
    },
    main: {
        flex: 1,
        elevation: 6,
        borderRadius: 8,
        width: '90%',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Theme.colors.primary,
    },
    inner: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    outer: {
        height: 60,
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
    },
})