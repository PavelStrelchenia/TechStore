import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/features/products/components/ProductCard";
import { arrivedProducts } from "@/features/products/data/arrivedProducts";

const ArrivedSection = () => {
    return (
        <Section className="my-7">
            <Container>
                <div className="mb-7 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-[23px] font-bold">Just arrived</h2>
                        <p className="text-[14px] text-text-secondary">
                            Be the first to get the latest tech.
                        </p>
                    </div>

                    <Link
                        href="/shop"
                        className="mt-5 flex items-center gap-2 text-[14px] text-text-secondary md:mt-0"
                    >
                        View all products
                        <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>

                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {arrivedProducts.map(({ id, ...product }) => (
                        <li key={id}>
                            <ProductCard {...product} />
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    );
};

export default ArrivedSection;
