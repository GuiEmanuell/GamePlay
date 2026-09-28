import React, { useState } from 'react';
  Platform,
  ScrollView,
  StatusBar as RNStatusBar,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home';
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
