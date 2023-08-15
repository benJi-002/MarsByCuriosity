import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from './components/MainScreen';
import CameraRollScreen from './components/CameraRollScreen';
import ImageScreen from './components/ImageScreen';

const Stack = createStackNavigator();


export default function Navigation({onLayout}) {

    onLayout();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen
                    name='Select Camera and Date'
                    component={MainScreen}
                />
                <Stack.Screen
                    name='CameraRollScreen'
                    component={CameraRollScreen}
                />
                <Stack.Screen
                    name='ImageScreen'
                    component={ImageScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
