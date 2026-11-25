import type { Product } from "../types/product";
import type { ProductSortOption } from "../types/productSort";

export const sortProducts = (
    products: Product[],
    sortOption: ProductSortOption,
): Product[] => {
    const sortedProducts = [...products];
    switch (sortOption) {
        case "featured":
            return sortedProducts;
        case "price-low-high":
            return sortedProducts.sort((a, b) => a.price - b.price);
        case "price-high-low":
            return sortedProducts.sort((a, b) => b.price - a.price);
        case "top-rated":
            return sortedProducts.sort((a, b) => b.rating - a.rating);
        case "newest":
            return sortedProducts.sort(
                (a, b) => Number(b.newStatus) - Number(a.newStatus),
            );
        default:
            return sortedProducts;
    }
};
