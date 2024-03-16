import * as React from 'react';
import Routes from './routes'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

export default function MainNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }}>
                <Stack.Screen name={Routes.Splash} component={Splash} />
                <Stack.Screen name={Routes.Home} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}