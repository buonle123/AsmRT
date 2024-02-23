import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable } from 'react-native';
import { BORDERRADIUS, COLORS } from '../theme/theme';
import Icon from 'react-native-vector-icons/Entypo';

export default function InputField({
  label,
  inputType,
  keyboardType,
  value,
  fieldButtonLabel,
  fieldButtonFunction,
  onChangeText,
  error = ''
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={{
      marginBottom: error ? 10 : 0,
    }}>
      <View
        style={[{
          flexDirection: 'row',
          borderColor: error ? 'red' : COLORS.secondaryGreyHex, // Đổi màu border thành đỏ nếu có lỗi
          width: '100%',
          borderWidth: 2,
          padding: 5,
          marginTop: 25,
          borderRadius: BORDERRADIUS.radius_10,
          alignItems: 'center',
        }]}>

        {inputType === 'password' ? (
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder={label}
              keyboardType={keyboardType}
              value={value}
              style={{ flex: 1, padding: 10, color: 'white' }}
              secureTextEntry={!passwordVisible}
              onChangeText={onChangeText}
              placeholderTextColor={COLORS.secondaryGreyHex}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
              <Icon name={passwordVisible ? 'eye-with-line' : 'eye'} size={20} color={COLORS.secondaryGreyHex} />
            </TouchableOpacity>
          </View>
        ) : (
          <TextInput
            placeholderTextColor={COLORS.secondaryGreyHex}
            placeholder={label}
            keyboardType={keyboardType}
            value={value}
            style={{ flex: 1, padding: 10, color: 'white' }}
            onChangeText={onChangeText} />
        )}
        <TouchableOpacity onPress={fieldButtonFunction}>
          <Text style={{ color: '#AD40AF', fontWeight: '700' }}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
      </View>
      <View  >
        <Text style={{ color: 'red', textAlign: 'left', marginTop: error ? 10 : 0 }}>{error}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  passwordContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
});
