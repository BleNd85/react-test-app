import {useEffect, useRef} from "react";

export default function useObserver(ref, canLoad, isLoading, callbackFunction) {
    const observer = useRef();
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        let callback = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callbackFunction();
            }
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(ref.current);
    }, [isLoading]);
}