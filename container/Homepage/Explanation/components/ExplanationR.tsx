export const ExplanationR = () => {
    return (
        <div className="card-main bg-surface bg-opacity-60 md:col-span-1 self-strech">
            <div className="px-10 py-4 text-sm font-semibold text-onPrimary uppercase bg-primary bg-opacity-70 flex shadow-md w-full h-14 items-center">
                <svg
                    className="svg-inline--fa fa-exclamation-triangle fa-w-18 mr-4 font-normal"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                >
                    <path
                        fill="currentColor"
                        d="M248.747 204.705l6.588 112c.373 6.343 5.626 11.295 11.979 11.295h41.37a12 12 0 0 0 11.979-11.295l6.588-112c.405-6.893-5.075-12.705-11.979-12.705h-54.547c-6.903 0-12.383 5.812-11.978 12.705zM330 384c0 23.196-18.804 42-42 42s-42-18.804-42-42 18.804-42 42-42 42 18.804 42 42zm-.423-360.015c-18.433-31.951-64.687-32.009-83.154 0L6.477 440.013C-11.945 471.946 11.118 512 48.054 512H527.94c36.865 0 60.035-39.993 41.577-71.987L329.577 23.985zM53.191 455.002L282.803 57.008c2.309-4.002 8.085-4.002 10.394 0l229.612 397.993c2.308 4-.579 8.998-5.197 8.998H58.388c-4.617.001-7.504-4.997-5.197-8.997z"
                    ></path>
                </svg>
                <h3 className="text-base text-onPrimary m-0">Spoiler alert</h3>
            </div>

            <p className="sm:px-10 px-6 pb-10 pt-6 sm:text-xl text-lg">
                <b className="font-semibold">
                    Kudoku itu bukan app untuk nge-<i>budget</i> atau nge-<i>track</i> saham lo
                    doang
                </b>
                . Kudoku itu adalah app yang bisa ngeliat SELURUH keuangan dan investasi lo...{' '}
                <i>bird&apos;s eye view</i> yang bisa ngebantu lo ngertiin kondisi keuangan lo
                sekarang dan ngebantu lo untuk pergi ke level finansial yang selanjutnya.
            </p>
        </div>
    );
};
