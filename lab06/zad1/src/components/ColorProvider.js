import { createContext, React, useContext } from "react";
const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);
function ColorProvider({children}) {
    const colorObject = {
        paragraph: "red",
        primaryHeadLine: "blue",
        secondaryHeadLine: "green"
    }
    return (
        <ColorContext.Provider value={{colorObject}}>
            {children}
        </ColorContext.Provider>
    )
}
export default ColorProvider;