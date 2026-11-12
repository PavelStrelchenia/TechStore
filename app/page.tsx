import CategoriesSection from "@/components/layout/CategoriesSection/CategoriesSection";
import Header from "@/components/layout/Header/Header";
import Hero from "@/components/layout/Hero/Hero";
import FeaturedSection from "@/components/layout/FeaturedSection/FeaturedSection";
import UpgradeSection from "@/components/layout/UpgradeSection/UpgradeSection";
import ArrivedSection from "@/components/layout/ArrivedSection/ArrivedSection";
import ServiceSection from "@/components/layout/ServiceSection/ServiceSection";
import NewsletterSection from "@/components/layout/NewsletterSection/NewsletterSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <CategoriesSection />
            <FeaturedSection />
            <UpgradeSection />
            <ArrivedSection />
            <ServiceSection />
            <NewsletterSection />
            <Footer />
        </div>
    );
}
