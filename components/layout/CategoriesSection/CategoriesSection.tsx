import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import CategoryCard from "@/features/categories/components/CategoryCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CategoriesSection = () => {
    return (
        <Section className="my-7">
            <Container>
                <div className="mb-7 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-[23px] font-bold">
                            Explore categories
                        </h2>
                        <p className="text-[14px] text-text-secondary">
                            Find the right technology for your lifestyle.
                        </p>
                    </div>
                    <Link
                        href="/categories"
                        className="text-[14px] text-text-secondary flex items-center gap-2 mt-5 md:mt-0"
                    >
                        Browse all categories
                        <ArrowRight
                            aria-hidden={true}
                            className="text-text-secondary"
                            size={16}
                        />
                    </Link>
                </div>

                <div>
                    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                        <li>
                            <Link href="/categories/audio" className="block">
                                <CategoryCard
                                    title="Audio"
                                    imageSrc="/images/products/115x90.svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/categories/computers"
                                className="block"
                            >
                                <CategoryCard
                                    title="Computers"
                                    imageSrc="/images/products/115x90.svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/categories/peripherals"
                                className="block"
                            >
                                <CategoryCard
                                    title="Peripherals"
                                    imageSrc="/images/products/115x90.svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories/monitors" className="block">
                                <CategoryCard
                                    title="Monitors"
                                    imageSrc="/images/products/115x90.svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/categories/accessories"
                                className="block"
                            >
                                <CategoryCard
                                    title="Accessories"
                                    imageSrc="/images/products/115x90.svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/categories/smart-devices"
                                className="block"
                            >
                                <CategoryCard
                                    title="Devices"
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
