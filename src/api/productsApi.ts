import { Product } from "../types/product";
export const getProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.products as Product[];
    } catch (error) {
        console.error(error);
    }
}

export const getProductById = async (id: number) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data as Product;
    } catch (error) {
        console.error(error);
          throw error;
    }
}
