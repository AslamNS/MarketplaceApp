import {View, Text, StyleSheet, Image } from "react-native"
import { Product } from "../types/product"

export default function ProductCard({product}: {product: Product}){
    return (
        <View style={styles.container}>
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>
            <Text>{product.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        height: 200,
    },
})