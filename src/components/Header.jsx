import { useContext, useState }     from 'react'
import ResourceContext              from '../context/ResourceContext'
import ThemeContext                 from '../context/ThemeContextProvider'
import UserContext          from '../context/UserContext'
import useTheme                     from '../hooks/useTheme'
import MenuOption                   from './MenuOption'
import SessionManagerPopup          from './SessionManagerPopup'

export default function Header(){
    
    const { theme } = useContext(ThemeContext)
    const { save } = useContext(ResourceContext)
    const { userLogged } = useContext(UserContext)
    const { colors } = theme
    const { changeTheme } = useTheme()
    const [showPopup, setPopup] = useState(false)

    const style ={
        height: '10vh',
        backgroundColor: colors.background,
        display: 'flex',
        justifyContent: 'space-around',
    }

    return(
        <>
            <header style={style}>
                <MenuOption onClick={changeTheme}>
                    CAMBIAR THEME
                </MenuOption>
                <MenuOption onClick={() => setPopup(true)}>
                    INICIAR SESION/REGISTRARSE
                </MenuOption>
                <MenuOption 
                    onClick={
                        () => {
                            if(userLogged() === null) setPopup(true)
                            else save()
                        }}>
                    GUARDAR 
                </MenuOption>
            </header>
            {showPopup && <SessionManagerPopup setPopup={setPopup}/>}
        </>
    )
}