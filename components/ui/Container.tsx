type ContainerProps = React.PropsWithChildren<{
    className?: string;
}>;

const Container = ({ children, className = "" }: ContainerProps) => {
    return (
        <div className={`mx-auto max-w-[1280px] px-6 ${className}`}>
            {children}
        </div>
    );
};

export default Container;
