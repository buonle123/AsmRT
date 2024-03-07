import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import CustomIcon from './CustomIcon'

interface CartItemProps {
    id: string,
    name: string,
    imagelink_square: ImageProps,
    special_ingredient: string,
    roasted: string,
    prices: any,
    type: string,
    incrementCartItemQuantityHandler: any,
    decrementCartItemQuantityHandler: any,

}
const CartItem: React.FC<CartItemProps> = ({
    id,
    name,
    imagelink_square,
    special_ingredient,
    roasted,
    prices,
    type,
    incrementCartItemQuantityHandler,
    decrementCartItemQuantityHandler,
}) => {
    return (
        <View>
            {prices.length != 1 ? <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }} colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={styles.CartItemLinerGradient}
            >
                <View style={styles.CartItemRow}>
                    <Image source={imagelink_square} style={styles.CartItemImage} />
                    <View style={styles.CartItemInfo}>
                        <View>
                            <Text style={styles.CartItemName}>{name}</Text>
                            <Text style={styles.CartItemSubtitle}>{special_ingredient}</Text>
                        </View>
                        <View style={styles.CartItemRoastedContainer}>
                            <Text style={styles.CartItemRoastedText}>{roasted}</Text>
                        </View>
                    </View>
                </View>
                {prices.map((data: any, index: any) => <View key={index} style={styles.CartItemSizeRowContainer}>
                    <View style={styles.CartItemSizeValueContainer}>
                        <View style={styles.SizeBox}>
                            <Text style={[styles.SizeText, { fontSize: type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_14 }]}>{data.size}</Text>
                        </View>
                        <Text style={styles.SizeCurrency}>{data.currency}
                            <Text style={styles.SizePrice}> {data.price}</Text>
                        </Text>
                    </View>
                    <View style={styles.CartItemSizeValueContainer}>
                        <TouchableOpacity style={styles.CartItemIcon} onPress={() => decrementCartItemQuantityHandler(id, data.size)}>
                            <CustomIcon name='minus' color={COLORS.primaryWhiteHex} />
                        </TouchableOpacity>
                        <View style={styles.CartItemQuantityContainer}>
                            <Text style={styles.QuantityText}>{data.quantity}</Text>
                        </View>
                        <TouchableOpacity style={styles.CartItemIcon} onPress={() => incrementCartItemQuantityHandler(id, data.size)}>
                            <CustomIcon name='add' color={COLORS.primaryWhiteHex} />
                        </TouchableOpacity>
                    </View>
                </View>)}
            </LinearGradient> : (
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }} colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                    style={styles.CartItemSingleLinerGradient}
                >
                    <View>
                        <Image source={imagelink_square} style={styles.CartItemSingleImage} />
                    </View>
                    <View style={styles.CartItemSingleInforContainer}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.CartItemName}>{name}</Text>
                            <Text style={styles.CartItemSubtitle}>{special_ingredient}</Text>
                        </View>
                        <View style={styles.CartItemSingleSizeValueContainer}>
                            <View style={styles.SizeBox}>
                                <Text style={[styles.SizeText, { fontSize: type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_14 }]}>{prices[0].size}</Text>
                            </View>
                            <Text style={styles.SizeCurrency}>{prices[0].currency}
                                <Text style={styles.SizePrice}> {prices[0].price}</Text>
                            </Text>
                        </View>
                        <View style={styles.CartItemSizeValueContainer}>
                            <TouchableOpacity style={styles.CartItemIcon} onPress={() => decrementCartItemQuantityHandler(id, prices[0].size)}>
                                <CustomIcon name='minus' color={COLORS.primaryWhiteHex} />
                            </TouchableOpacity>
                            <View style={styles.CartItemQuantityContainer}>
                                <Text style={styles.QuantityText}>{prices[0].quantity}</Text>
                            </View>
                            <TouchableOpacity style={styles.CartItemIcon} onPress={() => incrementCartItemQuantityHandler(id, prices[0].size)}>
                                <CustomIcon name='add' color={COLORS.primaryWhiteHex} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            )
            }
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    CartItemLinerGradient: {
        flex: 1,
        gap: SPACING.space_12,
        padding: SPACING.space_12,
        borderRadius: BORDERRADIUS.radius_20,
    },
    CartItemRow: {
        flexDirection: 'row',
        gap: SPACING.space_12,
        flex: 1
    },
    CartItemImage: {
        height: 125,
        width: 125,
        borderRadius: BORDERRADIUS.radius_20
    },
    CartItemInfo: {
        flex: 1,
        paddingVertical: SPACING.space_4,
        justifyContent: 'space-between'
    },
    CartItemName: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex
    },
    CartItemSubtitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_12,
        color: COLORS.secondaryLightGreyHex
    },
    CartItemRoastedContainer: {
        height: 50,
        width: 50 * 2 + SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryDarkGreyHex
    },
    CartItemRoastedText: {
        fontSize: FONTSIZE.size_12,
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_medium
    },
    CartItemSizeRowContainer: {
        flex: 1,
        alignItems: 'center',
        gap: SPACING.space_20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    CartItemSizeValueContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        gap: SPACING.space_20,
        justifyContent: 'center'
    },
    SizeBox: {
        backgroundColor: COLORS.primaryBlackHex,
        height: 40,
        width: 80,
        borderRadius: BORDERRADIUS.radius_10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SizeText: {
        color: COLORS.secondaryLightGreyHex,
        fontFamily: FONTFAMILY.poppins_medium,

    },
    SizeCurrency: {
        color: COLORS.primaryOrangeHex,
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18
    },
    SizePrice: {
        color: COLORS.primaryWhiteHex,
    },
    CartItemIcon: {
        backgroundColor: COLORS.primaryOrangeHex,
        padding: SPACING.space_8,
        borderRadius: BORDERRADIUS.radius_8
    },
    CartItemQuantityContainer: {
        backgroundColor: COLORS.primaryBlackHex,
        borderRadius: BORDERRADIUS.radius_10,
        borderColor: COLORS.primaryOrangeHex,
        borderWidth: 1,
        paddingVertical: SPACING.space_2,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',


    },
    QuantityText: {
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_14
    },
    CartItemSingleLinerGradient: {
        flexDirection: 'row',
        alignContent: 'center',
        padding: SPACING.space_12,
        gap: SPACING.space_12,
        borderRadius: BORDERRADIUS.radius_25,
    },
    CartItemSingleImage: {
        width: 125,
        height: 125,
        borderRadius: BORDERRADIUS.radius_20
    },
    CartItemSingleInforContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-around'
    },
    CartItemSingleSizeValueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: SPACING.space_12
    },
})