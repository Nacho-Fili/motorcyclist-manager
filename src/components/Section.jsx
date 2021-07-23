import {useContext} from 'react'
import ThemeContext from '../context/ThemeContextProvider'

export default function Section({ children }){

    const { theme } = useContext(ThemeContext)
    const { colors } = theme

    const style = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2% 0',
        backgroundColor: colors.other_2,
        borderTop: `3px solid ${colors.other_1}`
    }

    return(
        <section style={style}>
            {children}
        </section>
    )
}