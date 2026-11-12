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
                <div>
                    <h2>Featured products</h2>
                    <p>Our selection of everyday essentials.</p>
                    <Link href="/shop">
                        View all products <ArrowRight aria-hidden={true} />
                    </Link>
                </div>

                <div>
                    <ul>
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
