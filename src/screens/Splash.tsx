import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Theme from '../theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Routes from '../navigation/routes'
import Images from '../config/images'

const Splash = (Nav: NativeStackScreenProps<any, any>) => {

  React.useEffect(() => {
    setTimeout(() => {
      Nav.navigation.replace(Routes.Bottom)
    }, 1200)
  }, [])

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={Theme.colors.secondary} />
      <Image source={Images.splash} style={styles.img} />
      <Text style={styles.txt}>Erota Store</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  img: {
    height: 60,
    width: 60,
    resizeMode: 'center',
  },
  main: {
    flex: 1,
    gap:Theme.space[1],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.secondary
  },
  txt: {
    fontSize: Theme.fontSizes['4xl'],
    fontFamily: Theme.fonts.xl,
    color: Theme.colors.text.light
  }
})