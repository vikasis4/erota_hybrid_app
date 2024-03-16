import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import MainNav from './src/navigation/MainNav';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNav />
    </SafeAreaView>
  );
}



export default App;
