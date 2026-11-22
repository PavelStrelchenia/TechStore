import { Heart, Star } from "lucide-react";
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
    reviewCount,
}: ProductCardProps) => {
    return (
        <article className="relative mx-auto w-full max-w-[230px] rounded-xl border border-[#EAEAEA] bg-white p-4 transition-shadow duration-200 hover:shadow-md">
            <div className="relative flex h-[150px] items-center justify-center">
                {newStatus && (
                    <span className="absolute left-0 top-0 rounded-md bg-[#F0F0F2] px-2 py-1 text-[11px] font-semibold text-[#171717]">
                        New
                    </span>
                )}

                <Image
                    src={imageSrc}
                    alt={title}
                    width={160}
                    height={100}
                    className="h-auto max-h-[110px] w-full max-w-[160px] object-contain"
                />

                <button
                    type="button"
                    aria-label="Add to favorites"
                    className="absolute right-0 top-0 flex size-8 items-center justify-center rounded-full transition-colors hover:bg-[#F0F0F2]"
                >
                    <Heart
                        size={19}
                        strokeWidth={1.7}
                        fill={like ? "red" : "none"}
                        stroke={like ? "red" : "currentColor"}
                    />
                </button>
            </div>

            <div className="mt-3">
                <h3 className="min-h-[40px] text-sm font-semibold leading-5 text-[#171717] line-clamp-2">
                    {title}
                </h3>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-text-secondary">
                    <Star
                        size={14}
                        fill="#F5B544"
                        stroke="#F5B544"
                        aria-hidden="true"
                    />
                    <span className="font-medium text-[#171717]">{rating}</span>
                    <span>({reviewCount})</span>
                </div>

                <div className="mt-3 text-base font-bold text-[#171717]">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(price)}
                </div>

                <Button className="mt-4 w-full rounded-lg bg-[#171717] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#333333]">
                    Add to cart
                </Button>
            </div>
        </article>
    );
};

export default ProductCard;
