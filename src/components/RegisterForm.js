import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import CustomButton from './CustomButton';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import InputField from './InputField';
import { Validator } from '../theme/validator';

const RegisterForm = ({ onRegister, navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleRegister = async () => {
    // Kiểm tra điều kiện validate


    navigation.navigate('Login')
  };


  return (
    <View style={{ alignItems: 'center', backgroundColor: COLORS.primaryBlackHex, height: '100%', padding: 20 }}>
      <Image style={{ width: 150, height: 150 }} source={require('../assets/app_images/logo.png')} />
      <Text style={{ color: 'white', fontSize: FONTSIZE.size_18, fontFamily: FONTFAMILY.poppins_bold }}>Welcome to Lungo !!</Text>
      <Text style={{ color: 'white', fontSize: FONTSIZE.size_14, fontFamily: FONTFAMILY.poppins_ }}>Sign Up to continue</Text>

      <InputField label="Username" onChangeText={setUsername} error={usernameError} />
      <InputField label="Email" onChangeText={setEmail} error={emailError} />
      <InputField label="Phone" onChangeText={setPhone} error={phoneError} />
      <InputField inputType={'password'} label="Password" onChangeText={setPassword} error={passwordError} />
      <CustomButton label="Register" onPress={() => onRegister()} />
    </View>
  );
};

export default RegisterForm;
