import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const UpgradeSection = () => {
    return (
        <Section>
            <Container>
                <h2>Upgrade your workspace.</h2>
                <p>Everything you need to work smarter.</p>
                <Link href="/accessories">
                    Shop accessories <ArrowRight aria-hidden={true} />
                </Link>
            </Container>
        </Section>
    );
};

export default UpgradeSection;
