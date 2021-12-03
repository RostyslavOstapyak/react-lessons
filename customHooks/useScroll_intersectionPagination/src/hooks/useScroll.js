import { useRef, useEffect } from 'react'

const useScroll = (parentRef, childrenRef, callback) => {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0,
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersecting');
                callback();
            }
        }, options)
        observer.current.observe(childrenRef.current)

        return () => {
            observer.current.unobserve(childrenRef.current)
        }
    }, [callback]);

    return {

    }
}

export default useScroll;