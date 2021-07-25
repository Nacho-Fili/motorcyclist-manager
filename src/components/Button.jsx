import { useContext }   from 'react'
import ThemeContext     from '../context/ThemeContextProvider'

export default function Button({ children, onClick }){

    const { theme } = useContext(ThemeContext)
    const { colors } = theme

    const style = {
        width: '45%',
        marginTop: 10,
        height: '100%',
        backgroundColor: colors.background,
        color: colors.font,
        border: 0,
        borderBottom: `3px solid ${colors.other_1}`,
        borderRight: `2px solid ${colors.other_1}`,
        outline: 'none'
    }

    return(
        <button style={style} type="submit" onClick={onClick}>
            { children }
        </button>
    )
}