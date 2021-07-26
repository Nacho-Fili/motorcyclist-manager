import { useContext }   from 'react'
import ThemeContext     from '../context/ThemeContextProvider'

export default function UsernameInput({ onChange }){

    const { theme } = useContext(ThemeContext)
    const { colors }= theme

    const style = {
        outline: 'none',
        backgroundColor: colors.background,
        border: 0,
        height: 'auto',
        width: 'auto',
        borderBottom: `2px solid ${colors.other_1}`,
        color: colors.font,
        paddingLeft: '20px',
        gridColumn: '1/2',
        gridRow: '2/3'
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