import Header from "@/components/layout/Header/Header";
import ShopHero from "@/components/layout/ShopHero/ShopHero";
import NewsletterSection from "@/components/layout/NewsletterSection/NewsletterSection";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ShopSidebar from "@/components/layout/ShopSidebar/ShopSidebar";
import ProductGrid from "@/features/products/components/ProductGrid";
import { products } from "@/features/products/data/products";

export default function ShopPage() {
    return (
        <>
            <Header />

            <main>
                <ShopHero />

                <Section id="products" className="pb-16 pt-4 md:pb-20">
                    <Container>
                        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
                            <ShopSidebar />

                            <div className="min-w-0">
                                <div className="mb-7">
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2860FF]">
                                        TechStore collection
                                    </p>
                                    <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
                                        Explore All Products
                                    </h2>
                                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
                                        Find the perfect technology for your
                                        lifestyle.
                                    </p>
                                </div>

                                <ProductGrid products={products} />
                            </div>
                        </div>
                    </Container>
                </Section>

                <NewsletterSection />
            </main>

            <Footer />
        </>
    );
}
