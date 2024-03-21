import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Theme from '../../theme'

const StyledButton = ({ txt, fxn }: { txt: string, fxn: any }) => {
  return (
    <TouchableOpacity onPress={fxn}>
      <View style={styles.main}>
        <Text style={styles.txt}>{txt}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default StyledButton

const styles = StyleSheet.create({
  main:{
    backgroundColor: Theme.colors.secondary,
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6,
    marginTop:10
  },
  txt:{
    textAlign: 'center',
    fontFamily: Theme.fonts.lg,
    color: Theme.colors.text.light,
    fontSize: 20,
    paddingVertical: 8
  }
})