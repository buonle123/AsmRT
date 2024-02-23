// LoginForm.js
import React, { useEffect, useState } from 'react';
import { View, KeyboardAvoidingView, Alert, Image, Text, TouchableOpacity } from 'react-native';
import CustomButton from './CustomButton';

import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import InputField from './InputField';
import Icon from 'react-native-vector-icons/Ionicons';



const LoginForm = ({ onLogin, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin()
  }

  return (
    <KeyboardAvoidingView>
      <View style={{ alignItems: 'center', backgroundColor: COLORS.primaryBlackHex, height: '100%', padding: 20 }}>
        <Image style={{ width: 200, height: 200 }} source={require('../assets/app_images/logo.png')} />
        <Text style={{ color: 'white', fontSize: FONTSIZE.size_18, fontFamily: FONTFAMILY.poppins_bold }}>Welcome to Lungo !!</Text>
        <Text style={{ color: 'white', fontSize: FONTSIZE.size_14, fontFamily: FONTFAMILY.poppins_ }}>Login to continue</Text>
        <InputField value={username} label="Username" onChangeText={setUsername} />
        <InputField value={password} inputType={'password'} label="Password" onChangeText={setPassword} />
        <TouchableOpacity onPress={() => { }} style={{ flexDirection: "row", alignItems: "start", justifyContent: 'start' }}>
          {false ? (
            <Icon
              name="checkbox-outline"
              size={20}
              color={COLORS.primaryOrangeHex}
            />
          ) : (
            <Icon name="square-outline" size={20} color="#666" />
          )}
          <Text style={{ marginLeft: 10, color: 'white', fontFamily: FONTFAMILY.poppins_medium, fontSize: FONTSIZE.size_14 }}>Remember Me</Text>
        </TouchableOpacity>
        <CustomButton label="Login" onPress={handleLogin} />
        <CustomButton label="SignUp" onPress={() => { navigation.navigate('Register') }} />
      </View>
    </KeyboardAvoidingView>

  );
}
export default LoginForm;
