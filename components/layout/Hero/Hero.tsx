import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <Section>
            <Container>
                <div>
                    <h1>Technology that moves you forward.</h1>
                    <p>
                        Discover carefully selected devices designed for
                        everyday life.
                    </p>
                </div>
                <div>
                    <Link href="/shop">
                        Explore products <ArrowRight />
                    </Link>
                    <Link href="/new">
                        Discover what&apos;s new <ArrowRight />
                    </Link>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;
