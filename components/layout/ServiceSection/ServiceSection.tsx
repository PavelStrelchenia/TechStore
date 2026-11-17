import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { RefreshCw, ShieldCheck, Truck } from "lucide-react";

const ServiceSection = () => {
    return (
        <Section className="my-10">
            <Container>
                <ul className="grid grid-cols-1 divide-y divide-[#EAEAEA] rounded-xl border border-[#EAEAEA] bg-white px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-3">
                    <li className="flex items-center gap-4 py-5 md:justify-center md:px-3 lg:py-7">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F5F5F5]">
                            <Truck
                                size={21}
                                strokeWidth={1.7}
                                className="text-[#171717]"
                                aria-hidden="true"
                            />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[#171717]">
                                Free shipping
                            </h3>
                            <p className="mt-1 text-xs text-text-secondary">
                                On orders over $100.
                            </p>
                        </div>
                    </li>

                    <li className="flex items-center gap-4 py-5 md:justify-center md:px-3 lg:py-7">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F5F5F5]">
                            <ShieldCheck
                                size={21}
                                strokeWidth={1.7}
                                className="text-[#171717]"
                                aria-hidden="true"
                            />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[#171717]">
                                Secure checkout
                            </h3>
                            <p className="mt-1 text-xs text-text-secondary">
                                Your payments are always protected.
                            </p>
                        </div>
                    </li>

                    <li className="flex items-center gap-4 py-5 md:justify-center md:px-3 lg:py-7">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F5F5F5]">
                            <RefreshCw
                                size={21}
                                strokeWidth={1.7}
                                className="text-[#171717]"
                                aria-hidden="true"
                            />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[#171717]">
                                Easy returns
                            </h3>
                            <p className="mt-1 text-xs text-text-secondary">
                                30-day hassle-free returns.
                            </p>
                        </div>
                    </li>
                </ul>
            </Container>
        </Section>
    );
};

export default ServiceSection;
