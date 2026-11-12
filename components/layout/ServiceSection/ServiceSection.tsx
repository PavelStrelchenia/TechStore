import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { RefreshCw, ShieldCheck, Truck } from "lucide-react";

const ServiceSection = () => {
    return (
        <Section>
            <Container>
                <ul>
                    <li>
                        <Truck aria-hidden={true} />
                        <h3>Free shipping</h3>
                        <p>On orders over $100.</p>
                    </li>
                    <li>
                        <ShieldCheck aria-hidden={true} />
                        <h3>Secure checkout</h3>
                        <p>Your payments are always protected.</p>
                    </li>
                    <li>
                        <RefreshCw aria-hidden={true} />
                        <h3>Easy returns</h3>
                        <p>30-day hassle-free returns.</p>
                    </li>
                </ul>
            </Container>
        </Section>
    );
};

export default ServiceSection;
