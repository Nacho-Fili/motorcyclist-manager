import ThemeContext from '../context/ThemeContextProvider'
import { useContext } from 'react'

export default function useTheme(){

    const { theme, setTheme } = useContext(ThemeContext)


    const changeTheme = () => setTheme(theme.opposite)

    return({
        changeTheme,
    })
}