import Container from "@/components/ui/Container";
import Link from "next/link";
import { UserRound, Heart, ShoppingBag } from "lucide-react";

const Header = () => {
    return (
        <Container>
            <header>
                <div>
                    <Link href="/">TECHSTORE</Link>
                </div>
                <nav aria-label="Main navigation">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link href="/categories">Categories</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <form role="search">
                        <input
                            type="search"
                            placeholder="Search products..."
                            aria-label="Search products"
                        />
                    </form>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link href="/profile" aria-label="Open profile">
                                <UserRound />
                            </Link>
                        </li>
                        <li>
                            <Link href="/favorites" aria-label="Open favorites">
                                <Heart />
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart" aria-label="Open cart">
                                <ShoppingBag />
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </Container>
    );
};

export default Header;
