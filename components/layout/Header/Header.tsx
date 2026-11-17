import Container from "@/components/ui/Container";
import Link from "next/link";
import { UserRound, Heart, ShoppingBag, Search, Menu } from "lucide-react";

const Header = () => {
    return (
        <header className="w-full bg-background-primary h-[50px]">
            <Container className="flex w-full h-full justify-between items-center gap-2 md:gap-8  ">
                <div>
                    <Link
                        href="/"
                        className="text-[20px] font-bold text-text-primary after:content-['.'] after:text-[#2860FF]"
                    >
                        TECHSTORE
                    </Link>
                </div>
                <nav aria-label="Main navigation" className="hidden md:block">
                    <ul className="flex items-center gap-8 list-none m-0 p-0 ">
                        <li>
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" className="nav-link">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories" className="nav-link">
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="hidden lg:flex flex-1 max-w-[320px] bg-[#F0F0F1] rounded-[10px] h-9 px-3">
                    <form
                        role="search"
                        className="flex items-center h-full gap-2"
                    >
                        <Search size={16} className="shrink-0" />

                        <input
                            name="search"
                            type="search"
                            placeholder="Search products..."
                            aria-label="Search products"
                            className="w-full border-none outline-none bg-transparent text-sm"
                        />
                    </form>
                </div>

                <div>
                    <ul className="flex items-center gap-1 md:gap-2 lg:gap-5 list-none m-0 p-0">
                        <li className="lg:hidden">
                            <Link
                                href="/search"
                                aria-label="Open search"
                                className="action-link"
                            >
                                <Search size={20} />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile"
                                aria-label="Open profile"
                                className="action-link"
                            >
                                <UserRound size={20} />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/favorites"
                                aria-label="Open favorites"
                                className="action-link"
                            >
                                <Heart size={20} />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cart"
                                aria-label="Open cart"
                                className="action-link"
                            >
                                <ShoppingBag size={20} />
                            </Link>
                        </li>
                        <li className="lg:hidden">
                            <Link
                                href="/menu"
                                aria-label="Open menu"
                                className="action-link"
                            >
                                <Menu size={20} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    );
};

export default Header;
