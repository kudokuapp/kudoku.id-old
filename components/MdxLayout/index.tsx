interface Props {
    children: JSX.Element;
}

export const MdxLayout = (props: Props) => {
    return (
        <>
            <div className="max-w-[800px] mx-auto mt-20 pb-20 lg:px-0 px-4">{props.children}</div>
        </>
    );
};
