import { View, Text, StyleSheet, Image, ActivityIndicator, Button } from 'react-native';
import { RootStackParamList } from '../navigation/types';
import { RouteProp } from '@react-navigation/native';
import { getProductById } from '../api/productsApi';
import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import useCartStore from '../store/cartStore';

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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const addToCart = useCartStore((state) => state.addToCart);
  // useEffect(()=>{
  //   setLoading(true)
  //   setError(null)
  //   const productId = route.params.productId;
  //     getProductById(productId).then((data)=>{
  //       setProduct(data); 
  //       setLoading(false)
  //     }).catch((error)=>{
  //       setError('Failed to load product');
  //     }).finally(()=>{
  //       setLoading(false)
  //     })
  // },[route.params.productId])

  useEffect(() => {
  const loadData = async () => {
    setLoading(true);
    setError(null);

    const productId = route.params.productId;

    try {
      const data = await getProductById(productId);
      setProduct(data);
    } catch (error) {
      setError('Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, [route.params.productId]);
  return (
    
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> :(
        <>
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
      
      <Button title="Add to Cart" onPress={() => product && addToCart(product)} />
      </>
      )
    }
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
