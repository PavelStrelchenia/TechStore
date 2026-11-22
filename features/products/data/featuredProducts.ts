import { products } from "./products";

const featuredProductIds = ["1", "2", "3", "4", "5"];

export const featuredProducts = products.filter((product) =>
    featuredProductIds.includes(product.id),
);
