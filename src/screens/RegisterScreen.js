// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RegisterForm from '../components/RegisterForm';
import { useNavigation } from '@react-navigation/native'; // Import thêm hook này

const RegisterScreen = () => {
  const navigation = useNavigation(); // Sử dụng hook useNavigation để có thể sử dụng navigation

  const handleRegister = () => {
    // Xử lý khi đăng ký thành công, chuyển đến màn hình Home hoặc màn hình đăng nhập
    navigation.goBack();
  };

  return (
    <View>
      <RegisterForm onRegister={handleRegister} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
