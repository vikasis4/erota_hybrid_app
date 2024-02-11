import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

const createStyle:any = {
  sectionContainer: {
    flex: 1,
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color:'white',
    fontSize:32
  }
}

function App(): React.JSX.Element {

  const styles = StyleSheet.create(createStyle);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar
        barStyle='light-content'
      />
      <Text style={styles.text}>
        Welcome to erota Store
      </Text>
    </SafeAreaView>
  );
}



export default App;
