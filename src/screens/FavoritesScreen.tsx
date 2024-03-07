import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS, SPACING } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'
import EmptyListAnimation from '../components/EmptyListAnimation'
import PaymentFooter from '../components/PaymentFooter'
import FavoriteItemCart from '../components/FavoriteItemCart'
const FavoritesScreen = ({ navigation }: any) => {
  const FavoriteList = useStore((state: any) => state.FavoriteList)
  const tabBarHeight = useBottomTabBarHeight()
  const addToFavouriteList = useStore((state: any) => state.addToFavouriteList)
  const deleteToFavouriteList = useStore((state: any) => state.deleteToFavouriteList)
  const ToggleFavorite = (favorite: boolean, type: string, id: string) => {
    console.log(favorite);
    favorite ? deleteToFavouriteList(type, id) : addToFavouriteList(type, id)
  }

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewFlex}>
        <View style={[styles.InnerScrollView, { marginBottom: tabBarHeight }]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title='Cart' />
            {FavoriteList.length == 0 ? <EmptyListAnimation title='No favorites' /> : <View style={styles.ListItemContainer}>
              {FavoriteList.map((data: any) => <TouchableOpacity onPress={() => navigation.push('Details', {
                index: data
                  .index,
                id: data.id,
                type: data.type
              })} key={data.id}>
                <FavoriteItemCart id={data.id} name={data.name} description={data.description} type={data.type} roasted={data.roasted} imagelink_portrait={data.imagelink_portrait} ingredients={data.ingredients} special_ingredient={data.special_ingredient}
                  average_rating={data.average_rating}
                  ratings_count={data.ratings_count} favourite={data.favourite} ToggleFavouriteItem={ToggleFavorite} />
              </TouchableOpacity>)}
            </View>}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  ScrollViewFlex: { flexGrow: 1 },
  InnerScrollView: { flex: 1, },
  ItemContainer: { flex: 1 },
  ListItemContainer: {
    flex: 1,
    padding: SPACING.space_20,
    gap: SPACING.space_20
  },
})