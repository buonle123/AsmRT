import { Dimensions, FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'
import CustomIcon from '../components/CustomIcon'
import { useStore } from '../store/store'
import CoffeeCard from '../components/CoffeeCard'

const getCategoriesFromData = (data: any) => {
  const temp: any = {}
  data.forEach((item: any) => {
    if (temp[item.name] === undefined) {
      temp[item.name] = 1
    } else {
      temp[item.name]++
    }
  })

  let categories = Object.keys(temp)
  categories.unshift('All')
  return categories
}
const getCoffeeList = (category: string, data: any) => {
  if (category === 'All') {
    return data
  } else {
    let coffeeList = data.filter((item: any) => item.name == category);
    return coffeeList;
  }
}

const HomeScreen = ({ navigation }: any) => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState(getCategoriesFromData(CoffeeList))
  const [searchText, setSearchText] = useState('')
  const [categoryIndex, setcategoryIndex] = useState({
    index: 0,
    category: categories[0]
  })
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  )
  const tabBarHeight = useBottomTabBarHeight()
  const listRef: any = useRef<FlatList>()

  const searchCoffee = (search: string) => {
    if (search != '') {
      listRef?.current?.scrollToOffset({ animated: true, offset: 0 })
      setcategoryIndex({ index: 0, category: categories[0] })
      setSortedCoffee([...CoffeeList.filter((item: any) => item.name.toLowerCase().includes(search.toLowerCase()))])
    } else {
      if (!(searchText.length > 0)) setcategoryIndex({ index: 0, category: categories[0] })
    }
  }
  const resetSearchCoffee = () => {
    listRef?.current?.scrollToOffset({ animated: true, offset: 0 })
    setcategoryIndex({ index: 0, category: categories[0] })
    setSortedCoffee([...CoffeeList])
    setSearchText('')
  }
  // useEffect(() => {
  //   if (searchText.length === 0) {
  //     setcategoryIndex({ index: 0, category: categories[0] })
  //   }
  // }, [searchText])
  useEffect(() => {
    if (searchText.length === 0) {
      setSortedCoffee(getCoffeeList(categoryIndex.category, CoffeeList));
    }
  }, [searchText]);
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <HeaderBar title='HomeScreen' />
        <Text style={styles.FindText}>Find the best {'\n'}coffee for you</Text >
        <View style={styles.SearchContainer}>
          <TouchableOpacity onPress={() => searchCoffee(searchText)}>
            <CustomIcon name='search' size={FONTSIZE.size_18} color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} style={styles.searchIcon} />
          </TouchableOpacity>
          <TextInput placeholder='Search in your mind...' placeholderTextColor={COLORS.primaryLightGreyHex}
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text)
              searchCoffee(text)
            }} style={styles.InputSearchText} />
          {searchText.length > 0 ? <TouchableOpacity onPress={resetSearchCoffee}>
            <CustomIcon style={styles.searchIcon} name='close' size={FONTSIZE.size_16} color={COLORS.primaryLightGreyHex} />
          </TouchableOpacity> : <></>}
        </View>
        <ScrollView horizontal showsVerticalScrollIndicator={false} contentContainerStyle={styles.CategoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View key={index.toString()} style={styles.CategoryContainer}>
              <TouchableOpacity style={styles.CategoryItem} onPress={() => {
                listRef?.current?.scrollToOffset({ animated: true, offset: 0 });
                setcategoryIndex({ index: index, category: categories[index] })
                setSortedCoffee(getCoffeeList(data, CoffeeList))
              }
              }>
                <Text style={[styles.CategoryText, categoryIndex.index == index ? { color: COLORS.primaryOrangeHex } : {}]}>{data}</Text>
                {categoryIndex.index == index ? <View style={styles.ActiveCategory} /> : <></>}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <FlatList ref={listRef} horizontal ListEmptyComponent={
          <View style={styles.EmptyListContainer}>
            <Text style={styles.TextEmpty}>No Coffee Available</Text>
          </View>
        } showsHorizontalScrollIndicator={false} data={sortedCoffee} contentContainerStyle={[styles.FlatListContainer]} keyExtractor={(item, index) => index.toString()} renderItem={({ item, index }) => {
          return <TouchableOpacity onPress={() => navigation.push('Details', { index: index, id: item.id, type: item.type })}>
            <CoffeeCard
              id={item.id}
              index={item.index}
              type={item.type}
              rosted={item.rosted}
              imagelink_square={item.imagelink_square}
              name={item.name}
              special_ingredient={item.special_ingredient}
              average_rating={item.average_rating}
              price={item.prices[0]}
            />
          </TouchableOpacity>
        }} />
        <Text style={styles.TitleBeans}>Beans Coffee</Text>
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={BeanList} contentContainerStyle={[styles.FlatListContainer, { marginBottom: tabBarHeight }]} keyExtractor={(item, index) => index.toString()} renderItem={({ item, index }) => {
          return <TouchableOpacity onPress={() => navigation.push('Details', { index: index, id: item.id, type: item.type })}>
            <CoffeeCard
              id={item.id}
              index={item.index}
              type={item.type}
              rosted={item.rosted}
              imagelink_square={item.imagelink_square}
              name={item.name}
              special_ingredient={item.special_ingredient}
              average_rating={item.average_rating}
              price={item.prices[0]}
            />
          </TouchableOpacity>
        }} />
      </ScrollView >
    </View >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  ScrollViewFlex: {
    flexGrow: 1
  },
  FindText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.poppins_light,
    paddingLeft: SPACING.space_30
  },
  SearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: BORDERRADIUS.radius_20,
    margin: SPACING.space_30
  },
  InputSearchText: {
    flex: 1,
    color: COLORS.primaryWhiteHex,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
  },
  searchIcon: {
    marginHorizontal: SPACING.space_20
  },

  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_30,
    marginBottom: SPACING.space_20,
    height: SPACING.space_30 * 2,
  },
  CategoryContainer: {
    paddingHorizontal: SPACING.space_20
  },
  CategoryText: {
    color: COLORS.primaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,

  },
  CategoryItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.space_15,
  },
  ActiveCategory: {
    backgroundColor: COLORS.primaryOrangeHex,
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_15,
  },
  FlatListContainer: {

  },
  TitleBeans: {
    color: COLORS.secondaryLightGreyHex,
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_medium,
    marginLeft: SPACING.space_30,
    marginVertical: SPACING.space_20,

  },
  EmptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.space_36 * 3.4,
    marginLeft: SPACING.space_30,
    width: Dimensions.get('window').width - SPACING.space_30 * 2
  },
  TextEmpty: {
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryLightGreyHex,
  },
})