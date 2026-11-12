import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/features/products/components/ProductCard";
import { arrivedProducts } from "@/features/products/data/arrivedProducts";

const ArrivedSection = () => {
    return (
        <Section>
            <Container>
                <div>
                    <h2>Just arrived</h2>
                    <p>Be the first to get the latest tech.</p>
                    <Link href="/shop">
                        View all products <ArrowRight aria-hidden={true} />
                    </Link>
                </div>

                <div>
                    <ul>
                        {arrivedProducts.map(({ id, ...product }) => (
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

export default ArrivedSection;
