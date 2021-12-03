import { useRef, useCallback } from 'react';
const useDebounce = (callback, delay) => {
    const timer = useRef();

    const debounceCallback = useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback();
        }, delay)
    }, [callback, delay])

    return {
        debounceCallback;
    }
}

export default useDebounce;