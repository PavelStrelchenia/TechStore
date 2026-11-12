import { ArrowRight } from "lucide-react";
import Image from "next/image";

type CategoryCardProps = {
    title: string;
    imageSrc: string;
};

const CategoryCard = ({ title, imageSrc }: CategoryCardProps) => {
    return (
        <div>
            <Image src={imageSrc} alt="" width={115} height={90} />
            <h3>{title}</h3>
            <ArrowRight aria-hidden="true" />
        </div>
    );
};

export default CategoryCard;
