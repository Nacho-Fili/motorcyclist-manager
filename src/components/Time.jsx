import { useContext } from 'react'
import ThemeContext from '../context/ThemeContextProvider'

export default function Time({ children }){
    
    const { theme } = useContext(ThemeContext)
    const { colors } = theme

    const style = {
        width: '20%',
        height: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: `2px solid ${colors.other_1}`,
        fontSize: '120%',
        color: colors.font 
    }
    return(
        <div style={style}>
            { children }
        </div>
    )
} 