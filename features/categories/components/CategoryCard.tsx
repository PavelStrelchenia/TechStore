import { ArrowRight } from "lucide-react";
import Image from "next/image";

type CategoryCardProps = {
    title: string;
    imageSrc: string;
};

const CategoryCard = ({ title, imageSrc }: CategoryCardProps) => {
    return (
        <div className="w-full max-w-[150px] md:max-w-none lg:max-w-[150px] bg-[#F0F0F2] p-3 m-auto rounded-[9px]">
            <Image
                src={imageSrc}
                alt=""
                width={115}
                height={90}
                className="m-auto"
            />
            <div className="flex justify-between items-center mt-3">
                <h3 className="text-sm font-bold">{title}</h3>
                <ArrowRight aria-hidden="true" size={16} />
            </div>
        </div>
    );
};

export default CategoryCard;
