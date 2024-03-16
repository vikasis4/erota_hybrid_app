import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function MainNav({ children }: any) {
    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    );
}