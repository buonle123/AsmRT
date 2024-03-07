import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme'

interface EmptyListAnimationProps {
    title: string
}
const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({ title }) => {
    return (
        <View style={styles.EmptyCartContainer}>
            <LottieView style={styles.LottieStyle} source={require('../lottie/coffeecup.json')} autoPlay loop />
            <Text style={styles.TitleText}>{title}</Text>
        </View>
    )
}

export default EmptyListAnimation

const styles = StyleSheet.create({
    EmptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LottieStyle: {
        height: 300,
        width: '100%',
    },
    TitleText: {
        color: COLORS.primaryOrangeHex,
        fontSize: FONTSIZE.size_18,
        fontFamily: FONTFAMILY.poppins_medium
    }
})