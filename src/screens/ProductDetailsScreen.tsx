import { View, Text, StyleSheet, Image } from 'react-native';
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
      <Image 
      source={{ uri: product?.thumbnail }}
      style={styles.image}
      />
      <Text style={styles.text}>{product?.title}</Text>
      <Text style={styles.text}> ${product?.price}</Text>
      <Text style={styles.text}>{product?.description}</Text>
      <Text style={styles.text}>Rating: {product?.rating}</Text>
      <Text style={styles.text}>Stock: {product?.stock}</Text>
      <Text style={styles.text}>Brand: {product?.brand}</Text>
      <Text style={styles.text}>Category: {product?.category}</Text>
      <Text style={styles.text}>Discount Percentage: {product?.discountPercentage}</Text>
      <Text style={styles.text}>Return Policy: {product?.returnPolicy}</Text>
      <Text style={styles.text}>Shipping Information: {product?.shippingInformation}</Text>
      <Text style={styles.text}>Availability Status: {product?.availabilityStatus}</Text>
      <Text style={styles.text}>Shipping Insurance: {product?.shippingInsurance}</Text>
      <Text style={styles.text}>{product?.isReturnable}</Text>
      <Text style={styles.text}>{product?.isAdultOnly}</Text>
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
  image: {
    width: 100,
    height: 100,
  },
});
