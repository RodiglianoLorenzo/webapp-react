import { createContext, useState, useContext } from "react";

const ConetextUploader = createContext();

export function UpLoandingContext({ children }) {
    const [Loading, setLoading] = useState(false);

    return (
        <ConetextUploader.Provider value={{ Loading, setLoading }}>
            {children}
        </ConetextUploader.Provider>
    );
}

export function useLoader() {
    return useContext(ConetextUploader);
}