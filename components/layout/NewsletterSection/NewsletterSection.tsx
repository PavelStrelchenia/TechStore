import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const NewsletterSection = () => {
    return (
        <Section>
            <Container>
                <div>
                    <h2>Stay ahead of technology.</h2>
                    <p>Get updates on new arrivals and exclusive offers.</p>
                </div>
                <form>
                    <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        aria-label="Your email address"
                        required
                    />
                    <Button variant="primary" type="submit">
                        Subscribe
                    </Button>
                </form>
            </Container>
        </Section>
    );
};

export default NewsletterSection;
