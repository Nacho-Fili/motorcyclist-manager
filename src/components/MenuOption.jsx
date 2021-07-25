import { useState, useContext } from 'react'
import ThemeContext             from '../context/ThemeContextProvider'

export default function MenuOption({ children, onClick }){

    const [cursor, setCursor] = useState('default')

    const { theme } = useContext(ThemeContext)
    const { colors } = theme

    const style = cursor => ({
        margin:0, 
        paddingTop: 20, 
        color: colors.font,
        cursor: cursor
    })

    return(
        <p 
            style={style(cursor)} 
            onMouseEnter={() => setCursor('pointer')}
            onMouseLeave={() => setCursor('default')}
            onClick={onClick}>
            {children}
        </p>
    )


}