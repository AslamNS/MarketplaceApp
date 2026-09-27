import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type ProductsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Products'>;

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

export default function ProductsScreen({ navigation }: { navigation: ProductsScreenNavigationProp }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products Screen</Text>
      {products.map((product) => (
        <Button key={product.id} title={`Go to ${product.name}`} onPress={() => navigation.navigate('ProductDetails', { productId: product.id })} />
      ))}
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
    marginBottom: 20,
  },
});
