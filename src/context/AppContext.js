import { createContext } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {

    return (
        <AppContext.Provider value="Context from App Provider Component">
            {children}
        </AppContext.Provider>
    )
}
export default AppContext;