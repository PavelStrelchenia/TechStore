import type { Product } from "../types/product";

export const featuredProducts: Product[] = [
    {
        id: "1",
        title: "Sony WH-1000XM5 Headphones",
        imageSrc: "/images/products/160x100.svg",
        price: 78,
        rating: 4.8,
        newStatus: true,
        like: false,
    },
    {
        id: "2",
        title: "HP Fortis G1i Chromebook",
        imageSrc: "/images/products/160x100.svg",
        price: 812.9,
        rating: 4.5,
        newStatus: false,
        like: false,
    },
    {
        id: "3",
        title: "Logitech G305 X Superlight",
        imageSrc: "/images/products/160x100.svg",
        price: 89.59,
        rating: 5,
        newStatus: false,
        like: false,
    },
    {
        id: "4",
        title: "ASUS TUF Gaming",
        imageSrc: "/images/products/160x100.svg",
        price: 200,
        rating: 4.9,
        newStatus: true,
        like: false,
    },
];
