import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import ImageBackgroundInfor from './ImageBackgroundInfor'
import PaymentFooter from '../components/PaymentFooter'

const DetailsScreen = ({ navigation, route }: any) => {
  const ItemOfIndex = useStore((state: any) => route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList)[route.params.index]
  const addToFavotiteList = useStore((state: any) => state.addToFavotiteList)
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList)
  const [fullDesc, setFullDesc] = useState(false)
  const [price, setPrice] = useState(ItemOfIndex.prices[0])
  const BackHanlder = () => navigation.pop()
  const ToggleFavorite = (favorite: boolean, type: string, id: string) => {
    favorite ? deleteFromFavoriteList(type, id) : addToFavotiteList(type, id)
  }
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackgroundInfor EnableBackHandler={true}
          imagelink_portrait={ItemOfIndex.imagelink_portrait}
          type={ItemOfIndex.type}
          id={ItemOfIndex.id}
          favourite={ItemOfIndex.favourite}
          name={ItemOfIndex.name}
          special_ingredient={ItemOfIndex.special_ingredient}
          ingredients={ItemOfIndex.ingredients}
          average_rating={ItemOfIndex.average_rating}
          ratings_count={ItemOfIndex.ratings_count}
          roasted={ItemOfIndex.roasted}
          BackHandler={BackHanlder}
          ToggleFavourite={ToggleFavorite} />
        <View style={styles.FooterInforArea}>
          <Text style={styles.InforTitle}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback onPress={() => setFullDesc(prev => !prev)}>
              <Text style={styles.DescriptionText}>{ItemOfIndex.description}</Text>
            </TouchableWithoutFeedback>
          ) : (<TouchableWithoutFeedback onPress={() => setFullDesc(prev => !prev)}>
            <Text style={styles.DescriptionText} numberOfLines={3}>{ItemOfIndex.description}</Text>
          </TouchableWithoutFeedback>)}
          <Text style={styles.InforTitle}>Size</Text>
          <View style={styles.SizeOuterContainer}>
            {ItemOfIndex.prices.map((data: any) => (
              <TouchableOpacity onPress={() => setPrice(data)} key={data.size} style={[styles.SizeBox, {
                borderColor: data.size == price.size ? COLORS.primaryOrangeHex : COLORS.primaryDarkGreyHex,
              }]}>
                <Text style={[styles.SizeText, { fontSize: ItemOfIndex.type == 'bean' ? FONTSIZE.size_14 : FONTSIZE.size_16, color: data.size == price.size ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, }]}>{data.size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <PaymentFooter price={price} buttonTitle='Add to Cart' buttonPressHandler={() => { }} />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  FooterInforArea: {
    padding: SPACING.space_20,

  },
  InforTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10
  },
  DescriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30
  },

  SizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20
  },
  SizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium
  },
})