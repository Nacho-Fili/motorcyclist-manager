import React, {useState} from 'react'
import darkTheme from '../themes/dark'
import lightTheme from '../themes/light'

const Context = React.createContext(lightTheme)

export function ThemeContextProvider({ children }){

    const [theme, setTheme] = useState(darkTheme)
    darkTheme.opposite = lightTheme
    lightTheme.opposite = darkTheme

    return(
        <Context.Provider value={{theme, setTheme}}>
            { children }
        </Context.Provider>
    )
}

export default Context