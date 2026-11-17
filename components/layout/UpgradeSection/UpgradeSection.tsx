import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const UpgradeSection = () => {
    return (
        <Section className="my-7">
            <Container>
                <div className="flex min-h-[210px] items-center rounded-xl bg-gradient-to-r from-[#171717] to-[#555555] px-5 py-8 text-white md:min-h-[190px] md:bg-[url('/images/upgrade/upgrade-banner.png')] md:bg-cover md:bg-center md:bg-no-repeat md:px-7 lg:min-h-[180px] lg:px-8">
                    <div className="max-w-[380px]">
                        <h2 className="text-2xl font-bold leading-tight md:text-[26px]">
                            Upgrade your workspace.
                        </h2>

                        <p className="mt-2 text-sm text-white/80 md:text-base">
                            Everything you need to work smarter.
                        </p>

                        <Link
                            href="/accessories"
                            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#171717] transition-colors hover:bg-[#EAEAEA]"
                        >
                            Shop accessories
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default UpgradeSection;
