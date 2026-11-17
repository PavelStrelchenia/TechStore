import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const NewsletterSection = () => {
    return (
        <Section className="my-10">
            <Container>
                <div className="flex flex-col gap-6 rounded-xl bg-[#171717] px-5 py-8 text-white md:flex-row md:items-center md:justify-between md:px-8 md:py-10 lg:px-10">
                    <div className="max-w-[420px]">
                        <h2 className="text-2xl font-bold leading-tight md:text-[26px]">
                            Stay ahead of technology.
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-white/65 md:text-base">
                            Get updates on new arrivals and exclusive offers.
                        </p>
                    </div>

                    <form className="flex w-full flex-col gap-3 sm:flex-row md:max-w-[440px]">
                        <input
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Your email address"
                            aria-label="Your email address"
                            required
                            className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus:border-white/60"
                        />

                        <Button
                            variant="primary"
                            type="submit"
                            className="shrink-0 rounded-lg px-6 py-3 text-sm font-semibold"
                        >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </Container>
        </Section>
    );
};

export default NewsletterSection;
