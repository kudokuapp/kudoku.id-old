import { useRef, useState } from "react";

export const getRefValue = (ref: any) => {
	return ref.current;
}

export const useStateRef = (defaultValue: any) => {
	const ref = useRef(defaultValue);
	const [state, _setState] = useState(defaultValue);
	const setState = (value: any) => {
		_setState(value);
		ref.current = value;
	};

	return [state, setState, ref];
}