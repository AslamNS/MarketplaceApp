import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../navigation/types';
import { RouteProp } from '@react-navigation/native';
import { getProductById } from '../api/productsApi';
import { useEffect, useState } from 'react';
import { Product } from '../types/product';

type ProductDetailsRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetails'
>;

export default function ProductDetailsScreen({
  route,
}: {
  route: ProductDetailsRouteProp;
}) {
  const [product,setProduct] = useState<Product | null>(null);
  useEffect(()=>{
    const productId = route.params.productId;
    if(productId){
      getProductById(productId).then((data)=>{
        setProduct(data);
      }).catch((error)=>{
        console.error(error);
      })
    }
  },[route.params?.productId])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
