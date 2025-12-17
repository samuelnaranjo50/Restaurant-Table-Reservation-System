import { createContext, useState, useContext} from "react";

const hamburgerMenuState = createContext(null)

export function HamburgerMenuContext({children}){
    const [isHamburgerMenuActive, setHamburgerMenuState] = useState(false)

    const hamburgerState = {isHamburgerMenuActive, setHamburgerMenuState}

    return <hamburgerMenuState.Provider value={hamburgerState}>{children}</hamburgerMenuState.Provider>
}

export const useHamburgerState = () => useContext(hamburgerMenuState);
