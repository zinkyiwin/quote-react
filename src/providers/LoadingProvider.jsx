import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

const LoadingUpdateContext = createContext();

const LoadingProvider = (({ children }) => {
    const [loading, setLoading] = useState(true);

    function updateLoading(isLoading) {
        console.log("isLoading", loading, isLoading)
        setLoading(isLoading)
    }

    return (
        <LoadingContext.Provider value={loading}>
            <LoadingUpdateContext.Provider value={() => updateLoading()}>
                {children}
            </LoadingUpdateContext.Provider>
        </LoadingContext.Provider>
    );
});


export const useLoadingContext = () => useContext(LoadingContext);
export const useLoadingUpdateContext = () => useContext(LoadingUpdateContext);

export default LoadingProvider;