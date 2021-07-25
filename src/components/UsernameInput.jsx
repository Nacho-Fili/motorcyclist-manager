import { useContext }   from 'react'
import ThemeContext     from '../context/ThemeContextProvider'

export default function UsernameInput({ onChange }){

    const { theme } = useContext(ThemeContext)
    const { colors }= theme

    const style = {
        outline: 'none',
        backgroundColor: colors.background,
        border: 0,
        height: '18%',
        width: '71%',
        borderBottom: `2px solid ${colors.other_1}`,
        color: colors.font,
        paddingLeft: '20px'
    }

    return(
        <input 
            type="text" 
            name="username" 
            onChange={ onChange }
            placeholder='Username' 
            style={style}/>
    )
}