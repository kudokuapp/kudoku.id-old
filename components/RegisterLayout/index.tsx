import { Placeholder } from '../Placeholder';

export const RegisterLayout = () => {
    return (
        <section className="min-w-[100vw] bg-onPrimaryContainer my-28">
            <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 py-14 sm:px-8 px-2 gap-8 items-center">
                <div className="flex flex-col gap-8">
                    <h6 className="font-bold text-4xl text-center text-onPrimary">
                        Tunggu apalagi?
                    </h6>
                    <h6 className="font-bold text-4xl text-center text-secondaryContainer">
                        Yuk jadi #Kudos
                    </h6>
                </div>
                <div>
                    <Placeholder type="footer" />
                </div>
            </div>
        </section>
    );
};
