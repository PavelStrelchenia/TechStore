import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <Section className="py-7 md:bg-[url('/images/hero/hero-banner.png')] bg-cover bg-center bg-no-repeat">
            <Container>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-[340px]">
                        Technology that moves you forward.
                    </h1>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-[250px] mt-4">
                        Discover carefully selected devices designed for
                        everyday life.
                    </p>
                </div>

                <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-start md:items-center  gap-3 md:gap-7">
                    <Link
                        href="/shop"
                        className="inline-flex items-center justify-center gap-2 bg-[#2860FF] text-white px-5 py-3 rounded-lg text-sm font-medium"
                    >
                        Explore products <ArrowRight size={16} />
                    </Link>
                    <Link
                        href="/new"
                        className="inline-flex items-center gap-2 text-sm text-text-secondary font-medium "
                    >
                        Discover what&apos;s new <ArrowRight size={14} />
                    </Link>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;
