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

const categories = [
    { label: "All products", icon: LayoutGrid, active: true },
    { label: "Computers", icon: Laptop, active: false },
    { label: "Audio", icon: Headphones, active: false },
    { label: "Accessories", icon: TabletSmartphone, active: false },
    { label: "Gaming", icon: Gamepad2, active: false },
];

const ratings = [
    { label: "5 Stars", value: "5" },
    { label: "4 Stars & Up", value: "4" },
    { label: "3 Stars & Up", value: "3" },
];

const ShopSidebar = () => {
    return (
        <aside
            aria-label="Product filters"
            className="h-fit w-full rounded-2xl border border-border-primary bg-white p-5 shadow-sm md:p-6"
        >
            <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <SlidersHorizontal size={18} className="text-text-primary" />
                    <h2 className="text-base font-semibold text-text-primary">
                        Filters
                    </h2>
                </div>
                <button
                    type="button"
                    className="text-xs font-medium text-text-secondary transition-colors hover:text-[#2860FF]"
                >
                    Clear all
                </button>
            </div>

            <div className="border-t border-border-primary pt-5">
                <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-text-primary">
                        Categories
                    </h3>
                    <ArrowDown size={16} className="text-text-secondary" />
                </div>

                <ul className="space-y-1">
                    {categories.map(({ label, icon: Icon, active }) => (
                        <li key={label}>
                            <button
                                type="button"
                                aria-pressed={active}
                                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-150 ${
                                    active
                                        ? "bg-[#2860FF]/[0.08] font-semibold text-[#2860FF]"
                                        : "text-text-secondary hover:bg-background-secondary hover:text-text-primary"
                                }`}
                            >
                                <Icon size={17} strokeWidth={1.8} />
                                <span>{label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-5 border-t border-border-primary pt-5">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-text-primary">
                        Price range
                    </h3>
                    <ArrowDown size={16} className="text-text-secondary" />
                </div>

                <div className="mb-4 grid grid-cols-2 gap-3">
                    <label className="block">
                        <span className="mb-1.5 block text-xs text-text-secondary">
                            Min price
                        </span>
                        <span className="flex items-center rounded-lg border border-border-primary px-3 transition-colors focus-within:border-[#2860FF]">
                            <span className="text-sm text-text-placeholder">$</span>
                            <input
                                type="number"
                                name="minPrice"
                                min="0"
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
                            <span className="text-sm text-text-placeholder">$</span>
                            <input
                                type="number"
                                name="maxPrice"
                                min="0"
                                placeholder="2,000"
                                className="w-full min-w-0 bg-transparent py-2.5 pl-1 text-sm text-text-primary outline-none placeholder:text-text-placeholder"
                            />
                        </span>
                    </label>
                </div>

                <button
                    type="button"
                    className="w-full rounded-lg bg-[#171717] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#333333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2860FF]"
                >
                    Apply price
                </button>
            </div>

            <div className="mt-5 border-t border-border-primary pt-5">
                <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-text-primary">
                        Customer rating
                    </h3>
                    <ArrowDown size={16} className="text-text-secondary" />
                </div>

                <fieldset className="space-y-3">
                    <legend className="sr-only">Minimum customer rating</legend>
                    {ratings.map(({ label, value }) => (
                        <label
                            key={value}
                            className="group flex cursor-pointer items-center gap-3 text-sm text-text-secondary transition-colors hover:text-text-primary"
                        >
                            <input
                                type="radio"
                                name="rating"
                                value={value}
                                className="peer sr-only"
                            />
                            <span className="relative size-4 shrink-0 rounded-full border border-[#C9C9CE] transition-colors after:absolute after:left-1/2 after:top-1/2 after:size-2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full after:bg-white after:transition-transform after:content-[''] peer-checked:border-[#2860FF] peer-checked:bg-[#2860FF] peer-checked:after:scale-100 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#2860FF]" />
                            <span className="transition-colors group-hover:text-text-primary peer-checked:font-medium peer-checked:text-text-primary">
                                {label}
                            </span>
                        </label>
                    ))}
                </fieldset>
            </div>

            <div className="mt-5 border-t border-border-primary pt-5">
                <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-text-primary">
                        Availability
                    </h3>
                    <ArrowDown size={16} className="text-text-secondary" />
                </div>

                <fieldset className="space-y-3">
                    <legend className="sr-only">Product availability</legend>
                    {[
                        { label: "In stock", value: "in-stock" },
                        { label: "Out of stock", value: "out-of-stock" },
                    ].map(({ label, value }) => (
                        <label
                            key={value}
                            className="group flex cursor-pointer items-center gap-3 text-sm text-text-secondary transition-colors hover:text-text-primary"
                        >
                            <input
                                type="checkbox"
                                name="availability"
                                value={value}
                                className="peer sr-only"
                            />
                            <span className="flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-[#C9C9CE] text-white transition-colors peer-checked:border-[#2860FF] peer-checked:bg-[#2860FF] peer-checked:[&>svg]:opacity-100 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#2860FF]">
                                <Check size={12} strokeWidth={3} className="opacity-0 transition-opacity" />
                            </span>
                            <span className="transition-colors group-hover:text-text-primary">
                                {label}
                            </span>
                        </label>
                    ))}
                </fieldset>
            </div>
        </aside>
    );
};

export default ShopSidebar;
