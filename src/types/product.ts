export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
    images: string[];
    rating: number;
    stock: number;
    brand: string;
    discountPercentage: number;
    returnPolicy: string;
    shippingInformation: string;
    availabilityStatus: string;
    shippingInsurance: number;
    isReturnable: boolean;
    isAdultOnly: boolean;
}