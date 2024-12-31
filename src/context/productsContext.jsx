import React, { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [isSearchByName, setIsSearchByName] = useState("");  //set the product name on state context
    return (
        <ProductsContext.Provider
            value={{
                isSearchByName,
                setIsSearchByName,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
