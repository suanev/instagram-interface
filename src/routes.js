import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from './assets/instagram.png';
import Feed from './pages/Feed';

const Stack = createStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Feed}
                    options={{
                        headerTitle:
                            <Image
                                source={logo}
                            />,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#f5f5f5',
                        }

                    }}
                />
                {/* <Stack.Screen name="Profile" component={Profile} /> */}
            </Stack.Navigator>
        </NavigationContainer >
    )
};
