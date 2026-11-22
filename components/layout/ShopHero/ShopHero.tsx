import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ShopHero = () => {
    return (
        <Section className="py-10 md:py-16">
            <Container>
                <div className="relative overflow-hidden rounded-2xl bg-[#111323] bg-[url('/images/shopHero/shopHero-banner.png')] bg-cover bg-center bg-no-repeat px-7 py-12 text-white md:min-h-[320px] md:px-14 md:py-16">
                    <div className="relative z-10 max-w-[480px]">
                        <span className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
                            Our Products
                        </span>

                        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                            Shop the Latest
                            <span className="block bg-gradient-to-r from-[#6475FF] to-[#C18AFF] bg-clip-text text-transparent">
                                Tech & Gear
                            </span>
                        </h1>

                        <p className="mt-4 max-w-[320px] text-sm leading-relaxed text-white/75 md:text-base">
                            Discover cutting-edge technology and upgrade your
                            lifestyle.
                        </p>

                        <Link
                            href="#products"
                            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#171717] transition-colors hover:bg-[#EAEAEA]"
                        >
                            Explore Products
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default ShopHero;
