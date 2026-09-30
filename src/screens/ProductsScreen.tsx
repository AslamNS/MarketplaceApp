import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { getProducts } from '../api/productsApi';
import { Product } from '../types/product';
import ProductCard from '../components/ProductCard';

type ProductsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Products'>;

export default function ProductsScreen({ navigation }: { navigation: ProductsScreenNavigationProp }) {
  const [products, setProducts] = useState<Product[]>([]);
  console.log("products", products)
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data as Product[]);
    };
    fetchProducts();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => { navigation.navigate('ProductDetails', { productId: item.id }) }} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  }
});
