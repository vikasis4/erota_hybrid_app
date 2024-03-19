import React from 'react';
import { SafeAreaView } from 'react-native';
import MainNav from './src/navigation/MainNav';
import StoreProvider from './src/redux/StoreProvider';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StoreProvider>
        <MainNav />
      </StoreProvider>
    </SafeAreaView>
  );
}



export default App;
