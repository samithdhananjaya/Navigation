import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Homescreen';
import LoginScreen from './Screens/Loginscreen';
import RegisterScreen from './Screens/Registerscreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import DashboardScreen from './Screens/DashboardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} /> 
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
