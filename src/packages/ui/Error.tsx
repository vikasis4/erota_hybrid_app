import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Theme from '../../theme'


const Error = () => {
  return (
    <View style={styles.main2}>
    <Text style={styles.txt}>Error, Something Went wrong....</Text>
  </View>
  )
}

export default Error

const styles = StyleSheet.create({
    main2: {
        height:100,
        width:'auto',
        justifyContent:'center',
        alignItems: 'center',
        elevation:6,
        borderRadius:6,
        marginTop:50,
       marginHorizontal:20,
        backgroundColor: Theme.colors.secondary
      },
      txt:{
        fontFamily: Theme.fonts.xl,
        fontSize:Theme.space[2],
        color: Theme.colors.text.light
      }
})