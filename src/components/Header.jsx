import { useContext }   from 'react'
import ResourceContext  from '../context/ResourceContext'
import ThemeContext     from '../context/ThemeContextProvider'
import useTheme         from '../hooks/useTheme'

export default function Header(){
    
    const { theme } = useContext(ThemeContext)
    const { save } = useContext(ResourceContext)
    const { colors } = theme
    const { changeTheme } = useTheme()

    const style = {
        height: '10vh',
        backgroundColor: colors.other_2,
        display: 'flex',
        justifyContent: 'space-around'
    }

    return(
        <header style={style}>
            <p style={{margin:0, paddingTop: 20, color: colors.font}} onClick={changeTheme}>CAMBIAR THEME</p>
            <p style={{margin:0, paddingTop: 20, color: colors.font}} onClick={() => save()}> GUARDAR </p>
        </header>
    )
}