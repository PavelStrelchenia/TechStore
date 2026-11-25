"use client";

import { useState, type ChangeEvent } from "react";

import {
    ArrowDown,
    Check,
    Gamepad2,
    Headphones,
    Laptop,
    LayoutGrid,
    SlidersHorizontal,
    TabletSmartphone,
} from "lucide-react";

import type { ProductCategory } from "../types/product";
import type { ProductFiltersState } from "../types/productFilters";
import type { ProductSortOption } from "../types/productSort";

import { sortProducts } from "../utils/sortProducts";
import { filterProducts } from "../utils/filterProducts";
import { products } from "../data/products";

import ProductGrid from "./ProductGrid";

const categories = [
    { label: "All products", value: "all", icon: LayoutGrid },
    { label: "Computers", value: "computers", icon: Laptop },
    { label: "Audio", value: "audio", icon: Headphones },
    { label: "Accessories", value: "accessories", icon: TabletSmartphone },
    { label: "Gaming", value: "gaming", icon: Gamepad2 },
] as const;

const ratings = [
    { label: "5 Stars", value: 5 },
    { label: "4 Stars & Up", value: 4 },
    { label: "3 Stars & Up", value: 3 },
];

const ProductFilters = () => {
    const [sortOption, setSortOption] = useState<ProductSortOption>("featured");

    const [filters, setFilters] = useState<ProductFiltersState>({
        category: "all",
        minPrice: null,
        maxPrice: null,
        minRating: null,
        availability: "all",
    });

    const [priceRange, setPriceRange] = useState({
        min: "",
        max: "",
    });

    const [expandedSections, setExpandedSections] = useState({
        categories: true,
        price: true,
        rating: true,
        availability: true,
    });

    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value as ProductSortOption);
    };

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleCategoryChange = (category: ProductCategory | "all") => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            category,
        }));
    };

    const handlePriceInputChange = (key: "min" | "max", value: string) => {
        setPriceRange((prevRange) => ({
            ...prevRange,
            [key]: value,
        }));
    };

    const handleApplyPrice = () => {
        const minPrice =
            priceRange.min.trim() === "" ? null : Number(priceRange.min);

        const maxPrice =
            priceRange.max.trim() === "" ? null : Number(priceRange.max);

        if (
            (minPrice !== null &&
                (!Number.isFinite(minPrice) || minPrice < 0)) ||
            (maxPrice !== null &&
                (!Number.isFinite(maxPrice) || maxPrice < 0)) ||
            (minPrice !== null && maxPrice !== null && minPrice > maxPrice)
        ) {
            return;
        }

        setFilters((prevFilters) => ({
            ...prevFilters,
            minPrice,
            maxPrice,
        }));
    };

    const handleRatingChange = (minRating: number | null) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            minRating,
        }));
    };

    const handleAvailabilityToggle = (value: "in-stock" | "out-of-stock") => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            availability: prevFilters.availability === value ? "all" : value,
        }));
    };

    const handleClearFilters = () => {
        setFilters({
            category: "all",
            minPrice: null,
            maxPrice: null,
            minRating: null,
            availability: "all",
        });

        setPriceRange({
            min: "",
            max: "",
        });
    };

    const filteredProducts = filterProducts(products, filters);
    const sortedProducts = sortProducts(filteredProducts, sortOption);

    return (
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
            <aside
                aria-label="Product filters"
                className="h-fit w-full rounded-2xl border border-border-primary bg-white p-5 shadow-sm md:p-6"
            >
                <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <SlidersHorizontal
                            size={18}
                            className="text-text-primary"
                        />
                        <h2 className="text-base font-semibold text-text-primary">
                            Filters
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={handleClearFilters}
                        className="text-xs font-medium text-text-secondary transition-colors hover:text-[#2860FF]"
                    >
                        Clear all
                    </button>
                </div>

                {/* Categories */}
                <div className="border-t border-border-primary pt-5">
                    <button
                        type="button"
                        onClick={() => toggleSection("categories")}
                        aria-expanded={expandedSections.categories}
                        className="mb-3 flex w-full items-center justify-between"
                    >
                        <h3 className="text-sm font-semibold text-text-primary">
                            Categories
                        </h3>

                        <ArrowDown
                            size={16}
                            className={`text-text-secondary transition-transform duration-200 ${
                                expandedSections.categories ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {expandedSections.categories && (
                        <ul className="space-y-1">
                            {categories.map(({ label, value, icon: Icon }) => {
                                const isActive = filters.category === value;

                                return (
                                    <li key={value}>
                                        <button
                                            type="button"
                                            aria-pressed={isActive}
                                            onClick={() =>
                                                handleCategoryChange(value)
                                            }
                                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-150 ${
                                                isActive
                                                    ? "bg-[#2860FF]/[0.08] font-semibold text-[#2860FF]"
                                                    : "text-text-secondary hover:bg-background-secondary hover:text-text-primary"
                                            }`}
                                        >
                                            <Icon size={17} strokeWidth={1.8} />
                                            <span>{label}</span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>

                {/* Price range */}
                <div className="mt-5 border-t border-border-primary pt-5">
                    <button
                        type="button"
                        onClick={() => toggleSection("price")}
                        aria-expanded={expandedSections.price}
                        className="mb-4 flex w-full items-center justify-between"
                    >
                        <h3 className="text-sm font-semibold text-text-primary">
                            Price range
                        </h3>

                        <ArrowDown
                            size={16}
                            className={`text-text-secondary transition-transform duration-200 ${
                                expandedSections.price ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {expandedSections.price && (
                        <>
                            <div className="mb-4 grid grid-cols-2 gap-3">
                                <label className="block">
                                    <span className="mb-1.5 block text-xs text-text-secondary">
                                        Min price
                                    </span>

                                    <span className="flex items-center rounded-lg border border-border-primary px-3 transition-colors focus-within:border-[#2860FF]">
                                        <span className="text-sm text-text-placeholder">
                                            $
                                        </span>

                                        <input
                                            type="number"
                                            name="minPrice"
                                            min="0"
                                            value={priceRange.min}
                                            onChange={(event) =>
                                                handlePriceInputChange(
                                                    "min",
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="0"
                                            className="w-full min-w-0 bg-transparent py-2.5 pl-1 text-sm text-text-primary outline-none placeholder:text-text-placeholder"
                                        />
                                    </span>
                                </label>

                                <label className="block">
                                    <span className="mb-1.5 block text-xs text-text-secondary">
                                        Max price
                                    </span>

                                    <span className="flex items-center rounded-lg border border-border-primary px-3 transition-colors focus-within:border-[#2860FF]">
                                        <span className="text-sm text-text-placeholder">
                                            $
                                        </span>

                                        <input
                                            type="number"
                                            name="maxPrice"
                                            min="0"
                                            value={priceRange.max}
                                            onChange={(event) =>
                                                handlePriceInputChange(
                                                    "max",
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="2,000"
                                            className="w-full min-w-0 bg-transparent py-2.5 pl-1 text-sm text-text-primary outline-none placeholder:text-text-placeholder"
                                        />
                                    </span>
                                </label>
                            </div>

                            <button
                                type="button"
                                onClick={handleApplyPrice}
                                className="w-full rounded-lg bg-[#171717] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#333333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2860FF]"
                            >
                                Apply price
                            </button>
                        </>
                    )}
                </div>

                {/* Customer rating */}
                <div className="mt-5 border-t border-border-primary pt-5">
                    <button
                        type="button"
                        onClick={() => toggleSection("rating")}
                        aria-expanded={expandedSections.rating}
                        className="mb-3 flex w-full items-center justify-between"
                    >
                        <h3 className="text-sm font-semibold text-text-primary">
                            Customer rating
                        </h3>

                        <ArrowDown
                            size={16}
                            className={`text-text-secondary transition-transform duration-200 ${
                                expandedSections.rating ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {expandedSections.rating && (
                        <fieldset className="space-y-3">
                            <legend className="sr-only">
                                Minimum customer rating
                            </legend>

                            {ratings.map(({ label, value }) => (
                                <label
                                    key={value}
                                    className="group flex cursor-pointer items-center gap-3 text-sm text-text-secondary transition-colors hover:text-text-primary"
                                >
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={value}
                                        checked={filters.minRating === value}
                                        onChange={() =>
                                            handleRatingChange(value)
                                        }
                                        className="peer sr-only"
                                    />

                                    <span className="relative size-4 shrink-0 rounded-full border border-[#C9C9CE] transition-colors after:absolute after:left-1/2 after:top-1/2 after:size-2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full after:bg-white after:transition-transform after:content-[''] peer-checked:border-[#2860FF] peer-checked:bg-[#2860FF] peer-checked:after:scale-100 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#2860FF]" />

                                    <span className="transition-colors group-hover:text-text-primary peer-checked:font-medium peer-checked:text-text-primary">
                                        {label}
                                    </span>
                                </label>
                            ))}

                            <button
                                type="button"
                                onClick={() => handleRatingChange(null)}
                                className="text-xs text-text-secondary transition-colors hover:text-[#2860FF]"
                            >
                                Clear rating
                            </button>
                        </fieldset>
                    )}
                </div>

                {/* Availability */}
                <div className="mt-5 border-t border-border-primary pt-5">
                    <button
                        type="button"
                        onClick={() => toggleSection("availability")}
                        aria-expanded={expandedSections.availability}
                        className="mb-3 flex w-full items-center justify-between"
                    >
                        <h3 className="text-sm font-semibold text-text-primary">
                            Availability
                        </h3>

                        <ArrowDown
                            size={16}
                            className={`text-text-secondary transition-transform duration-200 ${
                                expandedSections.availability
                                    ? "rotate-180"
                                    : ""
                            }`}
                        />
                    </button>

                    {expandedSections.availability && (
                        <fieldset className="space-y-3">
                            <legend className="sr-only">
                                Product availability
                            </legend>

                            {(
                                [
                                    { label: "In stock", value: "in-stock" },
                                    {
                                        label: "Out of stock",
                                        value: "out-of-stock",
                                    },
                                ] as const
                            ).map(({ label, value }) => (
                                <label
                                    key={value}
                                    className="group flex cursor-pointer items-center gap-3 text-sm text-text-secondary transition-colors hover:text-text-primary"
                                >
                                    <input
                                        type="checkbox"
                                        name="availability"
                                        checked={filters.availability === value}
                                        onChange={() =>
                                            handleAvailabilityToggle(value)
                                        }
                                        className="peer sr-only"
                                    />

                                    <span className="flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-[#C9C9CE] text-white transition-colors peer-checked:border-[#2860FF] peer-checked:bg-[#2860FF] peer-checked:[&>svg]:opacity-100 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#2860FF]">
                                        <Check
                                            size={12}
                                            strokeWidth={3}
                                            className="opacity-0 transition-opacity"
                                        />
                                    </span>

                                    <span className="transition-colors group-hover:text-text-primary">
                                        {label}
                                    </span>
                                </label>
                            ))}
                        </fieldset>
                    )}
                </div>
            </aside>

            <div className="min-w-0">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-sm text-text-secondary">
                        Showing{" "}
                        <span className="font-semibold text-text-primary">
                            {sortedProducts.length}
                        </span>{" "}
                        of {products.length} products
                    </p>

                    <label className="flex items-center gap-2 text-sm text-text-secondary">
                        <span>Sort by:</span>

                        <select
                            name="sort"
                            value={sortOption}
                            onChange={handleSortChange}
                            className="rounded-lg border border-border-primary bg-white px-3 py-2 text-sm text-text-primary outline-none transition-colors focus:border-[#3858F6]"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                            <option value="top-rated">Top Rated</option>
                            <option value="newest">New Arrivals</option>
                        </select>
                    </label>
                </div>

                <ProductGrid products={sortedProducts} />
            </div>
        </div>
    );
};

export default ProductFilters;
