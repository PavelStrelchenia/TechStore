import { Heart } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import type { Product } from "../types/product";

type ProductCardProps = Omit<Product, "id">;

const ProductCard = ({
    newStatus,
    like,
    imageSrc,
    title,
    rating,
    price,
}: ProductCardProps) => {
    return (
        <div>
            {newStatus && <div>New</div>}
            <Image src={imageSrc} alt={title} width={160} height={100} />
            <div>
                <Heart
                    fill={like ? "red" : "none"}
                    stroke={like ? "red" : "currentColor"}
                />
            </div>
            <h3>{title}</h3>
            <div>{rating}</div>
            <div>{price}</div>
            <Button variant="secondary">Add to cart</Button>
        </div>
    );
};

export default ProductCard;
