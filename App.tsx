import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import DetailsScreen from './src/screens/DetailsScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import TabNavigator from './src/navigators/TabNavigator'
import { StyleSheet } from 'react-native'
import { COLORS } from './src/theme/theme'
import RegisterScreen from './src/screens/RegisterScreen'
import LoginScreen from './src/screens/LoginSreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name='Tab' component={TabNavigator} options={{ animation: 'fade_from_bottom' }} />
        <Stack.Screen name='Details' component={DetailsScreen} options={{ animation: 'fade_from_bottom' }} />
        <Stack.Screen name='Payment' component={PaymentScreen} options={{ animation: 'fade_from_bottom' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

