import { useState } from 'react';

export const Aside = ({ state = 'false', children }: { state: string; children: any }) => {
    const [top, setTop] = useState(false);
    const [bottom, setBottom] = useState(false);
    const [right, setRight] = useState(false);
    const [left, setLeft] = useState(false);
    const [mobile, setMobile] = useState(false);

    const onScroll = (e: any) => {
        const scrollHeight = e.target.scrollHeight;
        const scrollTop = e.target.scrollTop;
        const clientHeight = e.target.clientHeight;
        const heightCalc = scrollHeight - scrollTop;

        const scrollWidth = e.target.scrollWidth;
        const scrollLeft = e.target.scrollLeft;
        const clientWidth = e.target.clientWidth;
        const widthCalc = scrollWidth - scrollLeft;

        if (widthCalc === scrollWidth && scrollWidth === clientWidth) {
            setMobile(false);
        } else {
            setMobile(true);
        }

        if (!mobile) {
            if (clientHeight < 800) {
                setBottom(false);
                setTop(false);
            } else if (scrollTop === 0) {
                setBottom(true);
                setTop(false);
            }

            if (scrollTop > 10) {
                setBottom(true);
                setTop(true);
            }

            if (
                heightCalc - 1 === clientHeight ||
                heightCalc - 2 === clientHeight ||
                heightCalc - 3 === clientHeight ||
                heightCalc - 4 === clientHeight ||
                heightCalc - 5 === clientHeight ||
                heightCalc === clientHeight
            ) {
                setTop(true);
                setBottom(false);
            }
        } else {
            if (clientWidth < 300) {
                setRight(false);
                setLeft(false);
            } else if (scrollLeft === 0) {
                setRight(true);
                setLeft(false);
            }

            if (scrollLeft > 10) {
                setRight(true);
                setLeft(true);
            }

            if (
                widthCalc - 1 === clientWidth ||
                widthCalc - 2 === clientWidth ||
                widthCalc - 3 === clientWidth ||
                widthCalc - 4 === clientWidth ||
                widthCalc - 5 === clientWidth ||
                widthCalc + 1 === clientWidth ||
                widthCalc + 2 === clientWidth ||
                widthCalc + 3 === clientWidth ||
                widthCalc + 4 === clientWidth ||
                widthCalc + 5 === clientWidth ||
                widthCalc === clientWidth
            ) {
                setLeft(true);
                setRight(false);
            }
        }
    };

    const renderSpan = () => {
        if (!mobile) {
            if (top && bottom) {
                return (
                    <>
                        <SpanGradientTop />
                        <SpanGradientBottom />
                    </>
                );
            } else if (top) {
                return <SpanGradientTop />;
            } else if (bottom) {
                return <SpanGradientBottom />;
            }
        } else {
            if (left && right) {
                return (
                    <>
                        <SpanGradientLeft />
                        <SpanGradientRight />
                    </>
                );
            } else if (left) {
                return <SpanGradientLeft />;
            } else if (right) {
                return <SpanGradientRight />;
            }
        }
    };

    if (state === 'true') {
        return (
            <>
                {renderSpan()}
                <Div onScroll={onScroll}>{children}</Div>
            </>
        );
    } else {
        return (
            <>
                {renderSpan()}
                <Div onScroll={onScroll}>{children}</Div>
            </>
        );
    }
};

function Div({ onScroll, children }: { onScroll: any; children: any }) {
    return (
        <aside
            onScroll={onScroll}
            className="fixed bg-onPrimary rounded-xl shadow-xl sm:flex-col flex-row flex sm:top-[2.5vh] sm:right-[5px] bottom-[5px] right-[1vw] z-30 flex-nowrap items-end gap-2 sm:py-2.5 sm:px-1.5 px-2.5 py-1.5 w-fit h-fit sm:max-h-[95vh] max-w-[98vw] overflow-scroll"
        >
            {children}
        </aside>
    );
}

function SpanGradientBottom() {
    return (
        <span
            className="fade-in pointer-events-none rounded-b-xl sm:block hidden fixed bottom-[2.5vh] right-[5px] z-40 w-[46px] h-[50px] selection:bg-[rgba(255, 255, 255, 1)]"
            style={{
                background: 'linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)',
            }}
        ></span>
    );
}

function SpanGradientTop() {
    return (
        <span
            className="fade-in pointer-events-none rounded-t-xl sm:block hidden fixed top-[2.5vh] right-[5px] z-40 w-[46px] h-[50px] selection:bg-[rgba(255, 255, 255, 1)]"
            style={{
                background: 'linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)',
            }}
        ></span>
    );
}

function SpanGradientRight() {
    return (
        <span
            className="fade-in pointer-events-none rounded-r-xl block sm:hidden fixed bottom-[5px] right-[1vw] z-40 w-[46px] h-[46px] selection:bg-[rgba(255, 255, 255, 1)]"
            style={{
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)',
            }}
        ></span>
    );
}

function SpanGradientLeft() {
    return (
        <span
            className="fade-in pointer-events-none rounded-l-xl block sm:hidden fixed bottom-[5px] left-[1vw] z-40 w-[46px] h-[46px] selection:bg-[rgba(255, 255, 255, 1)]"
            style={{
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)',
            }}
        ></span>
    );
}
