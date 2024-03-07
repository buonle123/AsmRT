import { ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import ImageBackgroundInfor from '../screens/ImageBackgroundInfor'
interface FavouriteItemCartProps {
    id: string,
    name: string,
    type: string,
    imagelink_portrait: ImageProps,
    special_ingredient: string,
    average_rating: number,
    ingredients: string,
    ratings_count: string,
    roasted: string,
    description: string,
    favourite: boolean,
    ToggleFavouriteItem: any
}
const FavoriteItemCart: React.FC<FavouriteItemCartProps> = ({
    id,
    name,
    type,
    imagelink_portrait,
    special_ingredient,
    average_rating,
    ingredients,
    ratings_count,
    roasted,
    description,
    favourite,
    ToggleFavouriteItem,
}) => {
    return (
        <View style={styles.CartContainer}>
            <ImageBackgroundInfor EnableBackHandler={false}
                imagelink_portrait={imagelink_portrait}
                type={type}
                id={id}
                favourite={favourite}
                name={name}
                special_ingredient={special_ingredient}
                ingredients={ingredients}
                average_rating={average_rating}
                ratings_count={ratings_count}
                roasted={roasted}
                ToggleFavourite={ToggleFavouriteItem} />
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]} style={styles.LinearGradientContainer}>
                <Text style={styles.DescriptionTitle}>Description</Text>
                <Text style={styles.DescriptionText}>{description}</Text>
            </LinearGradient>
        </View>
    )
}

export default FavoriteItemCart

const styles = StyleSheet.create({
    CartContainer: {
        borderRadius: BORDERRADIUS.radius_25,
        overflow: 'hidden'
    },
    LinearGradientContainer: {
        padding: SPACING.space_20
    },
    DescriptionTitle: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.secondaryLightGreyHex
    },
    DescriptionText: {
        fontFamily: FONTFAMILY.poppins_regular,
        color: COLORS.primaryWhiteHex,
    },

})