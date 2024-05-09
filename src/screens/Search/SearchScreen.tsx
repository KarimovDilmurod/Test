import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View, FlatList} from 'react-native';
import {getProductListWithSearch} from 'state/productList/selectors';
import {useAppSelector} from 'hooks/redux';
import SearchComponent from 'components/Search';
import {styles} from './SearchScreen.Styles';
import R from 'res';
import useSmartNavigation from 'hooks/useSmartNavigation';
import CartItem from 'screens/Cart/components/CartItem';

export const SearchScreen = () => {
  const {goBack} = useSmartNavigation();
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const {searchResponse} = useAppSelector(getProductListWithSearch(search));

  const hendleSearch = () => {
    setSearch(searchInput);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => goBack()} style={styles.back}>
        <R.icons.ArrowIcon />
      </TouchableOpacity>

      <View style={styles.content}>
        <SearchComponent
          onChangeText={text => {
            if (!text) {
              setSearch('');
            }

            setSearchInput(text);
          }}
          value={searchInput}
          onPressBtnSearch={hendleSearch}
        />

        <FlatList
          data={searchResponse || []}
          contentContainerStyle={styles.flatlist_container}
          keyExtractor={(item, index) => item.id.toString() + index}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <View style={styles.space} />}
          renderItem={({item, index}) => (
            <CartItem order key={index} item={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
