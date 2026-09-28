import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';
import { New } from './src/screens/New';
import { AppointmentDetails } from './src/screens/AppointmentDetails';
import theme from './src/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
