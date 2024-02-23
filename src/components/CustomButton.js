import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../api/constants/color';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: COLORS.primaryOrangeHex,
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 30,
        width: 300,
      }}>
      <Text
        style={{

          textAlign: 'center',
          fontWeight: '700',
          fontSize: FONTSIZE.size_16,
          fontFamily: FONTFAMILY.poppins_medium,
          color: '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
