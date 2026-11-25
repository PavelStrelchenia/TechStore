import type { ProductCategory } from "./product";

export type ProductFiltersState = {
    category: ProductCategory | "all";
    minPrice: number | null;
    maxPrice: number | null;
    minRating: number | null;
    availability: "all" | "in-stock" | "out-of-stock";
};
