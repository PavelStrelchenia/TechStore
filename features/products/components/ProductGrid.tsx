import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

type ProductGridProps = {
    products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
    if (products.length === 0) {
        return (
            <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-border-primary bg-white px-6 py-12 text-center">
                <h3 className="text-lg font-semibold text-text-primary">
                    No products found
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary">
                    Try changing your filters or clearing them to see more products.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 2xl:grid-cols-3">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductGrid;
