import Link from 'next/link';

export const TopFooter = () => {
    return (
        <div className="sm:flex justify-between block">
            <ul className="list-none mb-0">
                <li>
                    <Link href="" passHref>
                        <a target="_blank" className="text-onPrimaryContainer no-underline">
                            <FooterText disabled>Dokupedia</FooterText>
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href="/security" passHref>
                        <a
                            target="_self"
                            className="text-onPrimaryContainer hover:text-primary no-underline"
                        >
                            <FooterText>Security</FooterText>
                        </a>
                    </Link>
                </li>
            </ul>
            <ul className="list-none flex flex-col sm:items-end">
                <li>
                    <Link href="/roadmap" passHref>
                        <a
                            target="_self"
                            className="text-onPrimaryContainer hover:text-primary no-underline"
                        >
                            <FooterText right={'true'}>Roadmap</FooterText>
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href="/changelog" passHref>
                        <a
                            target="_self"
                            className="text-onPrimaryContainer hover:text-primary no-underline"
                        >
                            <FooterText>Changelog</FooterText>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

const FooterText = (props: any) => {
    return (
        <button
            className={`text-left sm:text-4xl text-2xl font-bold w-max h-max ${
                props.disabled
                    ? ''
                    : 'transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200'
            } mb-6 ${props.right === 'true' ? 'text-right' : ''}`}
            {...props}
        >
            {props.children}
        </button>
    );
};
