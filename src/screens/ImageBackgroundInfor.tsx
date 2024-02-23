import { ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native';
import CustomIcon from '../components/CustomIcon';
import GradientBGIcon from '../components/GradientBGIcon';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
interface ImageBackgroundInforProps {
    EnableBackHandler: boolean;
    imagelink_portrait: ImageProps,
    type: string,
    id: string,
    favourite: boolean,
    name: string,
    special_ingredient: string,
    ingredients: string,
    average_rating: number,
    ratings_count: string,
    roasted: string,
    BackHandler?: any,
    ToggleFavourite: any,
}
const ImageBackgroundInfor: React.FC<ImageBackgroundInforProps> = ({
    EnableBackHandler,
    imagelink_portrait,
    type,
    id,
    favourite,
    name,
    special_ingredient,
    ingredients,
    average_rating,
    ratings_count,
    roasted,
    BackHandler,
    ToggleFavourite,
}) => {
    return (
        <View>
            <ImageBackground source={imagelink_portrait} style={styles.ItemBackgroundImage}>
                {EnableBackHandler ? (
                    <View style={styles.HeaderBGImageWithBack}>
                        <TouchableOpacity onPress={BackHandler}>
                            <GradientBGIcon name='left' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => ToggleFavourite(favourite, type, id)}>
                            <GradientBGIcon name='like' color={favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.HeaderBGImageWithOutBack}>
                        <TouchableOpacity>
                            <GradientBGIcon name='like' color={favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
                        </TouchableOpacity>
                    </View>
                )
                }
                <View style={styles.ImageInforOuterContainer}>
                    <View style={styles.ImageInforInnerContainer}>
                        <View style={styles.InforContainerrow}>
                            <View>
                                <Text style={styles.ItemTitleText}>{name}</Text>
                                <Text style={styles.ItemSubTitleText}>{special_ingredient}</Text>
                            </View>
                            <View style={styles.ItemPropertiesContainer}>
                                <View style={styles.ProperFirst}>
                                    <CustomIcon name={type == 'Bean' ? 'bean' : 'beans'} size={type == 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24} color={COLORS.primaryOrangeHex} />
                                    <Text style={[styles.ProperTextFirst, { marginTop: type == 'Bean' ? SPACING.space_4 + SPACING.space_2 : 0 }]}>{type}</Text>
                                </View>
                                <View style={styles.ProperFirst}>
                                    <CustomIcon name={type == 'Bean' ? 'location' : 'drop'} size={type == 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_16} color={COLORS.primaryOrangeHex} />
                                    <Text style={[styles.ProperTextFirst, { marginTop: SPACING.space_4 + SPACING.space_2 }]}>{ingredients}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.InforContainerrow}>
                            <View style={styles.RatingContainer}>
                                <CustomIcon name='star' size={FONTSIZE.size_20} color={COLORS.primaryOrangeHex} />
                                <Text style={styles.RatingText}>{average_rating}</Text>
                                <Text style={styles.RatingCountText}>({ratings_count})</Text>
                            </View>
                            <View style={styles.RoastedContainer}>
                                <Text style={styles.RoastedText}>{roasted}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground >
        </View >
    )
}

export default ImageBackgroundInfor

const styles = StyleSheet.create({
    ItemBackgroundImage: {
        width: '100%',
        aspectRatio: 20 / 25,
        justifyContent: 'space-between'
    },
    HeaderBGImageWithBack: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: SPACING.space_30
    },
    HeaderBGImageWithOutBack: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: SPACING.space_30
    },
    ImageInforOuterContainer: {
        paddingVertical: SPACING.space_24,
        paddingHorizontal: SPACING.space_30,
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
        borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
    },
    ImageInforInnerContainer: {
        justifyContent: 'space-between',
        gap: SPACING.space_15
    },
    InforContainerrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    ItemTitleText: {
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_24
    }
    ,
    ItemSubTitleText: {
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_12
    },
    ItemPropertiesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.space_20
    },
    ProperFirst: {
        height: 55,
        width: 55,
        borderRadius: BORDERRADIUS.radius_15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryBlackHex
    },
    ProperTextFirst: {
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_10,
        fontFamily: FONTFAMILY.poppins_medium,
    },
    RatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.space_10
    },
    RatingText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex
    },
    RatingCountText: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_12,
        color: COLORS.primaryWhiteHex
    },
    RoastedContainer: {
        height: 55,
        width: 55 * 2 + SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryBlackHex
    },
    RoastedText: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_10,
        color: COLORS.primaryWhiteHex
    },
})