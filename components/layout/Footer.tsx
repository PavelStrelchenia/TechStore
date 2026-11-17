import Section from "../ui/Section";
import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
            <Section className="bg-[#1C1C1C] py-10 text-white md:py-12 lg:py-14">
                <Container>
                    <div className="grid grid-cols-1 gap-9 border-b border-white/10 pb-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        <div className="flex flex-col gap-5">
                            <div>
                                <Link
                                    href="/"
                                    className="text-xl font-bold tracking-[0.12em]"
                                >
                                    TECHSTORE
                                </Link>
                                <p className="mt-2 text-sm text-white/55">
                                    Premium electronics. Better tomorrow.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link
                                    href="https://www.youtube.com/"
                                    aria-label="YouTube"
                                    className="transition-opacity hover:opacity-60"
                                >
                                    <Image
                                        src="/images/icons/youtube.svg"
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                </Link>

                                <Link
                                    href="https://x.com/"
                                    aria-label="X"
                                    className="transition-opacity hover:opacity-60"
                                >
                                    <Image
                                        src="/images/icons/X.svg"
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                </Link>

                                <Link
                                    href="https://www.instagram.com/"
                                    aria-label="Instagram"
                                    className="transition-opacity hover:opacity-60"
                                >
                                    <Image
                                        src="/images/icons/instagram.svg"
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                </Link>

                                <Link
                                    href="https://ru.linkedin.com/"
                                    aria-label="LinkedIn"
                                    className="transition-opacity hover:opacity-60"
                                >
                                    <Image
                                        src="/images/icons/Linkedin.svg"
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-semibold">Shop</h3>
                            <ul className="flex flex-col gap-3 text-sm text-white/55">
                                <li>
                                    <Link
                                        href="/products"
                                        className="transition-colors hover:text-white"
                                    >
                                        All products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/categories"
                                        className="transition-colors hover:text-white"
                                    >
                                        Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/deals"
                                        className="transition-colors hover:text-white"
                                    >
                                        Best deals
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/arrivals"
                                        className="transition-colors hover:text-white"
                                    >
                                        New arrivals
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-semibold">
                                Customer support
                            </h3>
                            <ul className="flex flex-col gap-3 text-sm text-white/55">
                                <li>
                                    <Link
                                        href="/help-center"
                                        className="transition-colors hover:text-white"
                                    >
                                        Help center
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/shipping"
                                        className="transition-colors hover:text-white"
                                    >
                                        Shipping info
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/return"
                                        className="transition-colors hover:text-white"
                                    >
                                        Return &amp; refunds
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact-us"
                                        className="transition-colors hover:text-white"
                                    >
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-semibold">
                                Company
                            </h3>
                            <ul className="flex flex-col gap-3 text-sm text-white/55">
                                <li>
                                    <Link
                                        href="/about"
                                        className="transition-colors hover:text-white"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/careers"
                                        className="transition-colors hover:text-white"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog"
                                        className="transition-colors hover:text-white"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/press"
                                        className="transition-colors hover:text-white"
                                    >
                                        Press
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
                        <p>© 2026 TechStore. All rights reserved.</p>
                        <p>Designed for everyday technology.</p>
                    </div>
                </Container>
            </Section>
        </footer>
    );
};

export default Footer;
