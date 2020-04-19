import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {Routes} from './routes';

const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
            <Routes />
        </>
    )
}

export default App;
