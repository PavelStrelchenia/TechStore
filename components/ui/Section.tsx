type SectionProps = React.PropsWithChildren<{
    className?: string;
}>;

const Section = ({ children, className = "" }: SectionProps) => {
    return <section className={`${className}`}>{children}</section>;
};

export default Section;
