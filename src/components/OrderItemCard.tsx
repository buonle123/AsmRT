import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

interface OrderItemCardProps {
    type: string
    name: string
    imagelink_square: ImageProps
    special_ingredient: string
    prices: any
    ItemPrice: string
}
const OrderItemCard: React.FC<OrderItemCardProps> = ({
    type,
    name,
    imagelink_square,
    special_ingredient,
    prices,
    ItemPrice,
}) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]} style={styles.CardLinearGradient}
        >
            <View style={styles.CardInforContainer}>
                <View style={styles.CardImageInforContainer}>
                    <Image source={imagelink_square} style={styles.Image} />
                    <View>
                        <Text style={styles.CardTitle}>{name}</Text>
                        <Text style={styles.CardSubtitle}>{special_ingredient}</Text>
                    </View>
                    <View>
                        <Text style={styles.CartCurrency}>$
                            <Text style={styles.CartPrice}>{ItemPrice}</Text>
                        </Text>
                    </View>
                </View>
            </View>
            {prices.map((data: any, index: any) => (
                <View key={index} style={styles.CardTableRow}>
                    <View style={styles.CardTableRow}>
                        <View style={styles.SizeBoxLeft}>
                            <Text style={[styles.SizeText, { fontSize: type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_14 }]}>{data.size}</Text>
                        </View>
                        <View style={styles.SizeBoxRight}>
                            <Text style={styles.PriceCurrency}>
                                <Text style={styles.Price}>{data.currency}</Text>{data.price}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.CardTableRow}>
                        <Text style={styles.CardQuantityPriceText}>
                            X <Text style={styles.Price}>{data.quantity}</Text>
                        </Text>
                        <Text style={styles.CardQuantityPriceText}>
                            $ {(data.quantity * data.price).toFixed(2).toString()}
                        </Text>
                    </View>
                </View>
            ))}
        </LinearGradient>
    )
}

export default OrderItemCard

const styles = StyleSheet.create({
    CardLinearGradient: {
        gap: SPACING.space_20,
        padding: SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_25
    },
    CardInforContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    CardImageInforContainer: {
        flexDirection: 'row',
        gap: SPACING.space_20,
        alignItems: 'center'
    },
    Image: {
        height: 90,
        width: 90,
        borderRadius: BORDERRADIUS.radius_15,
    },
    CardTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex
    },
    CardSubtitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_12,
        color: COLORS.secondaryLightGreyHex
    },
    CartPrice: {
        color: COLORS.primaryWhiteHex
    },
    CartCurrency: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryOrangeHex
    },
    CardTableRow: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    SizeBoxLeft: {
        backgroundColor: COLORS.primaryBlackHex,
        height: 45,
        flex: 1,
        borderTopLeftRadius: BORDERRADIUS.radius_10,
        borderBottomLeftRadius: BORDERRADIUS.radius_10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: COLORS.primaryGreyHex
    },
    SizeText: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.secondaryLightGreyHex
    },
    SizeBoxRight: {
        backgroundColor: COLORS.primaryBlackHex,
        height: 45,
        flex: 1,
        borderTopLeftRadius: BORDERRADIUS.radius_10,
        borderBottomLeftRadius: BORDERRADIUS.radius_10,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: COLORS.primaryGreyHex
    },
    PriceCurrency: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryOrangeHex,
    },
    Price: {
        color: COLORS.primaryWhiteHex,
    },
    CardQuantityPriceText: {
        alignItems: 'center',
        flex: 1,
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryOrangeHex,
    },
})