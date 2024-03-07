import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import CustomIcon from './CustomIcon'
import BGIcon from './BGIcon'
const CARD_WIDTH = Dimensions.get('window').width * 0.32

interface CoffeeCardProps {
    id: string,
    index: number,
    type: string,
    roasted: string,
    imagelink_square: ImageProps,
    name: string,
    special_ingredient: string,
    average_rating: number,
    price: any,
    buttonPressHandler?: any
}
const CoffeeCard: React.FC<CoffeeCardProps> = ({
    id,
    index,
    type,
    roasted,
    imagelink_square,
    name,
    special_ingredient,
    average_rating,
    price,
    buttonPressHandler }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }
        } style={styles.CardLinerGradientContainer} colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]} >
            <ImageBackground source={imagelink_square} style={styles.CardImageBG} resizeMode='cover'>
                <View style={styles.RatingContainer}>
                    <CustomIcon name='star' color={COLORS.primaryOrangeHex} size={FONTSIZE.size_16} />
                    <Text style={styles.RatingText}>{average_rating}</Text>
                </View>
            </ImageBackground>
            <Text style={[styles.TextDes, { fontSize: FONTSIZE.size_16 }]}>{name}</Text>
            <Text style={styles.TextDes}>{special_ingredient}</Text>
            <View style={styles.CardFooterRow}>
                <Text style={[styles.TextDes, styles.PriceText]}>
                    $ <Text style={[styles.TextDes, styles.PriceText,
                    ]}>{price.price}</Text>
                </Text>
                <TouchableOpacity onPress={() => buttonPressHandler(
                    {
                        id: id,
                        index: index,
                        type: type,
                        roasted: roasted,
                        imagelink_square: imagelink_square,
                        name: name,
                        special_ingredient: special_ingredient,
                        average_rating: average_rating,
                        prices: [{...price, quantity:1}],
                    }
                )}>
                <BGIcon name='add'
                    size={FONTSIZE.size_10}
                    BGColor={COLORS.primaryOrangeHex} color={COLORS.primaryWhiteHex} />
            </TouchableOpacity>
        </View>
        </LinearGradient >
    )
}

export default CoffeeCard

const styles = StyleSheet.create({
    CardLinerGradientContainer: {
        marginLeft: SPACING.space_30,
        borderRadius: BORDERRADIUS.radius_20,
        padding: SPACING.space_15
    },
    CardImageBG: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: BORDERRADIUS.radius_20,
        marginBottom: SPACING.space_12,
        overflow: 'hidden'
    },
    RatingContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        right: 0,
        paddingHorizontal: SPACING.space_12,
        gap: SPACING.space_10,
        backgroundColor: COLORS.primaryBlackRGBA,
        borderBottomLeftRadius: BORDERRADIUS.radius_20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    RatingText: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        lineHeight: 22,
    },
    TextDes: {
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_medium
    },
    CardFooterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: FONTSIZE.size_18,
        marginTop: SPACING.space_15
    },
    PriceText: {
        fontFamily: FONTFAMILY.poppins_light, fontSize: FONTSIZE.size_18,
        color: COLORS.primaryOrangeHex
    }

})