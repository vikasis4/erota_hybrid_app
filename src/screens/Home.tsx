import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import Theme from '../theme'
import NavBar from '../components/NavBar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

const Home = (Nav: NativeStackScreenProps<any, any>) => {

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={Theme.colors.primary} />
      <NavBar nav={Nav} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Theme.colors.primary
  }
})