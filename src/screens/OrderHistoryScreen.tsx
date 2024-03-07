import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'
import CartItem from '../components/CartItem'
import EmptyListAnimation from '../components/EmptyListAnimation'
import PopupAnimation from '../components/PopupAnimation'
import OrderHistoryCart from '../components/OrderHistoryCart'
const OrderHistoryScreen = ({ navigation }: any) => {
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList)
  console.log(OrderHistoryList.length);
  const tabBarHeight = useBottomTabBarHeight()
  const [showAnimation, setShowAnimation] = useState(false)
  const navigationHander = ({ index, id, type }: any) => {
    navigation.push('Details', {
      index, id, type
    })
  }
  const buttonPressHandler = () => {
    setShowAnimation(true)
    setTimeout(() => {
      setShowAnimation(false)
    }, 2000);
  }
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (
        <PopupAnimation style={styles.LottieAnimation}
          source={require('../lottie/download.json')} />) : <></>}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewFlex}>
        <View style={[styles.InnerScrollView, { marginBottom: tabBarHeight }]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title='Order History' />
            {CartItem.length == 0 ? (
              <EmptyListAnimation title='No Order History' />
            ) : <View style={styles.ListItemContainer}>
              {OrderHistoryList.map((data: any, index: any) => (
                <OrderHistoryCart key={index}
                  navigationHandler={navigationHander}
                  CartList={data.CartList}
                  CartListPrice={data.CartListPrice}
                  OrderDate={data.OrderDate} />
              ))}
            </View>}
          </View>
          {OrderHistoryCart.length > 0 ? <TouchableOpacity style={styles.DownloadButton} onPress={() => buttonPressHandler()}>
            <Text style={styles.ButtonText}>Download</Text>
          </TouchableOpacity> : <></>}
        </View>
      </ScrollView>
    </View>
  )
}

export default OrderHistoryScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },

  LottieAnimation: {
    height: 250
  },
  ScrollViewFlex: { flexGrow: 1 },
  InnerScrollView: { flex: 1, },
  ItemContainer: { flex: 1 },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_30
  },
  DownloadButton: {
    marginHorizontal: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_36 * 2,
    borderRadius: BORDERRADIUS.radius_10
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_18,
  }
})