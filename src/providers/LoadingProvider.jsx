import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

const LoadingUpdateContext = createContext();

const LoadingProvider = (({ children }) => {
    const [isLoading, setLoading] = useState(true);

    function updateLoading(loadingState) {
        setLoading(loadingState)
    }

    return (
        <LoadingContext.Provider value={isLoading}>
            <LoadingUpdateContext.Provider value={(loadingState) => updateLoading(loadingState)}>
                {children}
            </LoadingUpdateContext.Provider>
        </LoadingContext.Provider>
    );
});


export const useLoadingContext = () => useContext(LoadingContext);
export const useLoadingUpdateContext = () => useContext(LoadingUpdateContext);

export default LoadingProvider;