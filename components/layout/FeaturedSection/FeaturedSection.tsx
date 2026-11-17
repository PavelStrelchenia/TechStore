import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/features/products/components/ProductCard";
import { featuredProducts } from "@/features/products/data/featuredProducts";

const FeaturedSection = () => {
    return (
        <Section>
            <Container>
                <div className="mb-7 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-[23px] font-bold">
                            Featured products
                        </h2>
                        <p className="text-[14px] text-text-secondary">
                            Our selection of everyday essentials.
                        </p>
                    </div>
                    <Link
                        href="/shop"
                        className="text-[14px] text-text-secondary flex items-center gap-2 mt-5 md:mt-0"
                    >
                        View all products
                        <ArrowRight
                            aria-hidden={true}
                            className="text-text-secondary"
                            size={16}
                        />
                    </Link>
                </div>

                <div>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {featuredProducts.map(({ id, ...product }) => (
                            <li key={id}>
                                <ProductCard {...product} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </Section>
    );
};

export default FeaturedSection;
