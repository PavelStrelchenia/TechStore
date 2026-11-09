type SectionProps = React.PropsWithChildren<{
    className?: string;
}>;

const Section = ({ children, className = "" }: SectionProps) => {
    return (
        <section className={`py-[var(--section-spacing)] ${className}`}>
            {children}
        </section>
    );
};

export default Section;
