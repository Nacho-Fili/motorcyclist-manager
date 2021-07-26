import { useContext, useState }   from 'react'
import ThemeContext     from '../context/ThemeContextProvider'

export default function Button({ children, onClick, height='100%', width='85%', propStyle={} }){

    const { theme } = useContext(ThemeContext)
    const { colors } = theme
    const [ cursor, setCursor ] = useState('default')
    
    const style = (cursor) => ({
        width: width,
        marginTop: 10,
        height: height,
        backgroundColor: colors.background,
        color: colors.font,
        border: 0,
        borderBottom: `3px solid ${colors.other_1}`,
        borderRight: `2px solid ${colors.other_1}`,
        outline: 'none',
        cursor,
        ...propStyle
    })

    return(
        <button 
            style={style(cursor)} 
            type="submit" 
            onClick={onClick}
            onMouseEnter={() => setCursor('pointer')}
            onMouseLeave={() => setCursor('default')}>
            { children }
        </button>
    )
}