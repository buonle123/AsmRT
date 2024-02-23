// LoginScreen.js
import React, { useState } from 'react';
import { View } from 'react-native';
import LoginForm from '../components/LoginForm';
import { useNavigation } from '@react-navigation/native'; // 
const LoginScreen = () => {
  const navigation = useNavigation(); // Sử dụng hook 
  const LoginHanlder = () => {
    navigation.navigate('Tab')
  }
  return (
    <View>
      <LoginForm navigation={navigation} onLogin={LoginHanlder
      } />
    </View>
  );
};

export default LoginScreen;
