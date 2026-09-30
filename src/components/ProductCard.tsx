import {View, Text, StyleSheet, Pressable } from "react-native"
import { Product } from "../types/product"

type Props={
    product: Product,
    onPress: () => void,
}

export default function ProductCard({product,onPress}: Props){
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>
            <Text>{product.description}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 8,
        height: 200,
    },
})