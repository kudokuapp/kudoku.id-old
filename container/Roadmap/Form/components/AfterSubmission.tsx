import {
    LottieAnimationGede,
    LottieAnimationKecil,
} from '../../../../components/Lottie/CheckedLottie';

export const AfterSubmission = () => {
    return (
        <div className="flex flex-col gap-2 pb-8">
            <div className="md:block hidden">
                <LottieAnimationGede />
            </div>
            <div className="md:hidden sm:block block">
                <LottieAnimationKecil />
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="m-0 md:text-4xl text-2xl text-primary font-bold text-center fade-in">
                    Terima kasih udah ngisi formnya
                </h5>
                <h6 className="m-0 md:text-2xl text-xl font-[500] text-onPrimaryContainer text-center fade-in">
                    We&apos;ll get back to you shortly
                </h6>
            </div>
        </div>
    );
};
