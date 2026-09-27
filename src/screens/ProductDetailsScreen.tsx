import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../navigation/types';
import { RouteProp } from '@react-navigation/native';

type ProductDetailsRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetails'
>;

export default function ProductDetailsScreen({
  route,
}: {
  route: ProductDetailsRouteProp;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Details Screen</Text>
      <Text>Product ID: {route.params?.productId}</Text>
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
