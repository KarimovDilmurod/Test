import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import useSmartNavigation from 'hooks/useSmartNavigation';
import ProductCard from './components/ProductCard';
import R from 'res';

import {styles} from './ProductListStyles';
import {products} from 'constans/productsJson';

export const ProductListScreen = () => {
  const {navigate} = useSmartNavigation();

  const goToSearch = () => {
    navigate(R.routes.SCREEN_SEARCH);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.titleContent}>
          <Text style={styles.title}>Test App</Text>
        </View>

        <TouchableOpacity onPress={goToSearch} style={styles.search}>
          <Text>Search...</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.space} />}
        contentContainerStyle={styles.itemContent}
        keyExtractor={(item, index) => item.id.toString() + index}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ProductCard key={index} product={item} />
        )}
      />
    </SafeAreaView>
  );
};
