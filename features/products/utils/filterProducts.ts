import type { Product } from "../types/product";
import type { ProductFiltersState } from "../types/productFilters";

export const filterProducts = (
    products: Product[],
    filters: ProductFiltersState,
): Product[] => {
    return products.filter((product) => {
        const matchesCategory =
            filters.category === "all" || product.category === filters.category;

        const matchesMinPrice =
            filters.minPrice === null || product.price >= filters.minPrice;

        const matchesMaxPrice =
            filters.maxPrice === null || product.price <= filters.maxPrice;

        const matchesRating =
            filters.minRating === null || product.rating >= filters.minRating;

        const matchesAvailability =
            filters.availability === "all" ||
            (filters.availability === "in-stock" && product.inStock) ||
            (filters.availability === "out-of-stock" && !product.inStock);

        return (
            matchesCategory &&
            matchesMinPrice &&
            matchesMaxPrice &&
            matchesRating &&
            matchesAvailability
        );
    });
};
