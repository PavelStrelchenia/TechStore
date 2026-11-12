import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import CategoryCard from "@/features/categories/components/CategoryCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CategoriesSection = () => {
    return (
        <Section>
            <Container>
                <div>
                    <h2>Explore categories</h2>
                    <p>Find the right technology for your lifestyle.</p>
                    <Link href="/categories">
                        Browse all categories <ArrowRight aria-hidden={true} />
                    </Link>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link href="/categories/audio">
                                <CategoryCard
                                    title="Audio"
                                    imageSrc="/images/products/115x90.svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories/computers">
                                <CategoryCard
                                    title="Computers"
                                    imageSrc="/images/products/115x90.svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories/peripherals">
                                <CategoryCard
                                    title="Peripherals"
                                    imageSrc="/images/products/115x90.svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories/monitors">
                                <CategoryCard
                                    title="Monitors"
                                    imageSrc="/images/products/115x90.svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories/accessories">
                                <CategoryCard
                                    title="Accessories"
                                    imageSrc="/images/products/115x90.svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories/smart-devices">
                                <CategoryCard
                                    title="Smart devices"
                                    imageSrc="/images/products/115x90.svg"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </Section>
    );
};

export default CategoriesSection;
