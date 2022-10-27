import { useState } from 'react';

export const FormComponent = ({
    onSubmit,
}: {
    onSubmit: ((e: any) => void) | ((e: any) => Promise<void>);
}) => {
    const [email, setEmail] = useState('');
    const [type, setType] = useState('improvement');
    const [suggestion, setSuggesstion] = useState('');

    const handleChangeRadio = (event: any) => {
        setType(event.target.value);
    };

    return (
        <div className="md:p-8 p-4 w-full">
            <form onSubmit={onSubmit} className="flex flex-col items-center gap-6 w-full">
                <label className="flex flex-col gap-1 w-full">
                    <span className="block text-lg font-bold text-onPrimaryContainer">
                        Alamat Email
                    </span>
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email lo disini..."
                        required
                        className="px-2 py-2 w-full font-base text-onPrimary bg-onPrimaryContainer rounded-md border border-outline focus:outline-none focus:ring-2 focus:ring-secondaryContainer"
                    />
                </label>

                <div className="w-full flex flex-col gap-3">
                    <span className="block font-bold text-lg text-onPrimaryContainer">
                        Apa saran yang lo punya? <span className="font-normal">(Pilih satu)</span>
                    </span>
                    <ul className="w-full flex flex-wrap list-none gap-2 gap-y-4">
                        <li>
                            <input
                                type="radio"
                                id="improvement"
                                name="type"
                                value="improvement"
                                checked={type === 'improvement'}
                                onChange={handleChangeRadio}
                                className="sr-only peer"
                            />
                            <label
                                htmlFor="improvement"
                                className="bg-onPrimaryContainer text-onPrimary px-3 py-1.5 rounded-lg border border-outline cursor-pointer focus:outline-none hover:bg-primary peer-checked:ring-error peer-checked:bg-primary peer-checked:ring-2 peer-checked:border-transparent peer-checked:shadow-lg"
                            >
                                ⬆️ Improvement
                            </label>
                        </li>

                        <li>
                            <input
                                type="radio"
                                id="bug"
                                name="type"
                                value="bug"
                                onChange={handleChangeRadio}
                                checked={type === 'bug'}
                                className="sr-only peer"
                            />
                            <label
                                htmlFor="bug"
                                className="bg-onPrimaryContainer text-onPrimary px-3 py-1.5 rounded-lg border border-outline cursor-pointer focus:outline-none hover:bg-primary peer-checked:ring-error peer-checked:bg-primary peer-checked:ring-2 peer-checked:border-transparent peer-checked:shadow-lg"
                            >
                                🐛 Bug
                            </label>
                        </li>

                        <li>
                            <input
                                type="radio"
                                id="ui/ux"
                                name="type"
                                value="ui/ux"
                                onChange={handleChangeRadio}
                                checked={type === 'ui/ux'}
                                className="sr-only peer"
                            />
                            <label
                                htmlFor="ui/ux"
                                className="bg-onPrimaryContainer text-onPrimary px-3 py-1.5 rounded-lg border border-outline cursor-pointer focus:outline-none hover:bg-primary peer-checked:ring-error peer-checked:bg-primary peer-checked:ring-2 peer-checked:border-transparent peer-checked:shadow-lg"
                            >
                                🌟 UI/UX
                            </label>
                        </li>

                        <li>
                            <input
                                type="radio"
                                id="integration"
                                name="type"
                                value="integration"
                                onChange={handleChangeRadio}
                                checked={type === 'integration'}
                                className="sr-only peer"
                            />
                            <label
                                htmlFor="integration"
                                className="bg-onPrimaryContainer text-onPrimary px-3 py-1.5 rounded-lg border border-outline cursor-pointer focus:outline-none hover:bg-primary peer-checked:ring-error peer-checked:bg-primary peer-checked:ring-2 peer-checked:border-transparent peer-checked:shadow-lg"
                            >
                                🔌 Integration
                            </label>
                        </li>

                        <li>
                            <input
                                type="radio"
                                id="lainnya"
                                name="type"
                                value="lainnya"
                                onChange={handleChangeRadio}
                                checked={type === 'lainnya'}
                                className="sr-only peer"
                            />
                            <label
                                htmlFor="lainnya"
                                className="bg-onPrimaryContainer text-onPrimary px-3 py-1.5 rounded-lg border border-outline cursor-pointer focus:outline-none hover:bg-primary peer-checked:ring-error peer-checked:bg-primary peer-checked:ring-2 peer-checked:border-transparent peer-checked:shadow-lg"
                            >
                                🦄 Lainnya
                            </label>
                        </li>
                    </ul>
                </div>

                <textarea
                    value={suggestion}
                    name="suggestion"
                    onChange={(e) => setSuggesstion(e.target.value)}
                    placeholder="Deskripsikan ide atau masukan lo disini ya"
                    className="w-full bg-onPrimaryContainer text-onPrimary p-2 rounded-md font-base border border-outline focus:outline-none focus:ring-2 focus:ring-secondaryContainer min-h-[200px]"
                    required
                />
                <input
                    type="submit"
                    value="Submit"
                    className="w-full text-center font-bold text-onPrimary bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg text-xl py-2 cursor-pointer animation-popup hover:from-primary hover:to-tertiary"
                />
            </form>
        </div>
    );
};
