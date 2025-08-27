import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoadingScreen = ({ children }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        requestAnimationFrame(() => setLoading(false));
    }, [location]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-white z-50">
                <DotLottieReact
                    src="https://lottie.host/332bae56-d23c-41b7-82f9-fd8f8eb1b5a8/kDxe7GscUH.lottie"
                    loop
                    autoplay
                    className="h-40 w-40"
                />
                <div className="loop-text text-gray-600 font-semibold mt-4">Loading...</div>
            </div>
        );
    }

    return children;
};

export default LoadingScreen;
