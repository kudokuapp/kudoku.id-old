import { FormHeader } from './components/FormHeader';
import { AfterSubmission } from './components/AfterSubmission';
import { FormComponent } from './components/FormComponent';
import { useState } from 'react';

export const Form = () => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (event: any) => {
        setSubmitted(true);
        event.preventDefault();

        const data = {
            email: event.target.email.value,
            type: event.target.type.value,
            suggestion: event.target.suggestion.value,
        };

        const JSONdata = JSON.stringify(data);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };

        const response = await fetch('/api/suggestionform', options);
        const result = await response.json();
    };

    let content;

    if (submitted) {
        content = <AfterSubmission />;
    } else {
        content = <FormComponent onSubmit={onSubmit} />;
    }
    return (
        <div className="flex flex-col items-center my-20">
            <div className="bg-onPrimary bg-opacity-25 flex flex-col items-center rounded-xl md:gap-12 gap-6 shadow-lg py-8">
                <FormHeader />
                {content}
            </div>
        </div>
    );
};
