export type ProductCategory = "computers" | "audio" | "accessories" | "gaming";

export type Product = {
    id: string;
    title: string;
    imageSrc: string;
    price: number;
    rating: number;
    reviewCount: number;
    newStatus: boolean;
    like: boolean;
    category: ProductCategory;
    inStock: boolean;
};
