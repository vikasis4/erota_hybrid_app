import { StyleSheet, View, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Theme from '../theme'
import NavBar from '../components/NavBar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Ani_Banner from '../animation/Ani_Banner'
import ProductsList from '../components/ProductsList'

const Home = (Nav: NativeStackScreenProps<any, any>) => {

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" backgroundColor={Theme.colors.primary} />
      <NavBar nav={Nav} />
      <ScrollView style={{ flex: 1 }}>
        <Ani_Banner />
        <ProductsList />
      </ScrollView>
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