import { products } from "./products";

export const arrivedProducts = products.filter((product) => product.newStatus);
