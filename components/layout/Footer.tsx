import Section from "../ui/Section";
import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
            <Section className="bg-[#1C1C1C] text-white">
                <Container>
                    <div>
                        <div>
                            <Link href="/">TECHSTORE</Link>
                            <p>Premium electronics. Better tomorrow.</p>
                        </div>
                        <div>
                            <Link
                                href="https://www.youtube.com/"
                                aria-label="Link to YouTube"
                            >
                                <Image
                                    src="/images/icons/youtube.svg"
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                            </Link>
                            <Link href="https://x.com/" aria-label="Link to X">
                                <Image
                                    src="/images/icons/X.svg"
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                            </Link>
                            <Link
                                href="https://www.instagram.com/"
                                aria-label="Link to Instagram"
                            >
                                <Image
                                    src="/images/icons/instagram.svg"
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                            </Link>
                            <Link
                                href="https://ru.linkedin.com/"
                                aria-label="Link to LinkedIn"
                            >
                                <Image
                                    src="/images/icons/Linkedin.svg"
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3>Shop</h3>
                        <ul>
                            <li>
                                <Link href="/products">All products</Link>
                            </li>
                            <li>
                                <Link href="/categories">Categories</Link>
                            </li>
                            <li>
                                <Link href="/deals">Best deals</Link>
                            </li>
                            <li>
                                <Link href="/arrivals">New arrivals</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Customer support</h3>
                        <ul>
                            <li>
                                <Link href="/help-center">Help center</Link>
                            </li>
                            <li>
                                <Link href="/shipping">Shipping info</Link>
                            </li>
                            <li>
                                <Link href="/return">Return & refunds</Link>
                            </li>
                            <li>
                                <Link href="/contact-us">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li>
                                <Link href="/help-center">About Us</Link>
                            </li>
                            <li>
                                <Link href="/shipping">Careers</Link>
                            </li>
                            <li>
                                <Link href="/return">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact-us">Press</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>© 2026 TechStore. All rights reserved.</p>
                    </div>
                </Container>
            </Section>
        </footer>
    );
};

export default Footer;
