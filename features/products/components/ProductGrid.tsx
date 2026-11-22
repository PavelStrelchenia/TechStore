import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

type ProductGridProps = {
    products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
    if (products.length === 0) {
        return <p>No products found.</p>;
    }
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductGrid;
