import { useContext, useState }     from 'react'
import { BiLogIn, BiSave, BiMoon, BiSun, BiUser, BiLogOut }          from 'react-icons/bi'
import ResourceContext              from '../context/ResourceContext'
import ThemeContext                 from '../context/ThemeContextProvider'
import UserContext                  from '../context/UserContext'
import useTheme                     from '../hooks/useTheme'
import MenuOption                   from './MenuOption'
import SessionManagerPopup          from './SessionManagerPopup/SessionManagerPopup'
import useNavBar                    from '../hooks/useNavBar'

export default function Header(){
    
    const { theme }             = useContext(ThemeContext)
    const { save }              = useContext(ResourceContext)
    const { userLogged, logout }= useContext(UserContext)
    const { colors, name }      = theme
    const { changeTheme }       = useTheme()
    const [showPopup, setPopup] = useState(false)
    const { handleSave }        = useNavBar(setPopup, userLogged, save)

    const style ={
        height: '10vh',
        backgroundColor: colors.background,
        display: 'flex',
        justifyContent: 'space-around',
    }

    return(
        <>
            <header style={ style }>
                <MenuOption onClick={ changeTheme }>
                    {(name === 'dark') && <BiSun/>}
                    {(name === 'light') && <BiMoon/>}
                </MenuOption>
                <MenuOption 
                    onClick={ handleSave }>
                    <BiSave/>
                </MenuOption>
                <MenuOption onClick={() => setPopup(true)}>
                    {
                    userLogged.username 
                        ? <>{userLogged.username} <BiUser/></>
                        : <BiLogIn/>
                    }
                </MenuOption>
                {userLogged.username && <MenuOption onClick={ logout }> <BiLogOut/> </MenuOption>}
            </header>
            {showPopup && <SessionManagerPopup setPopup={setPopup}/>}
        </>
    )
}