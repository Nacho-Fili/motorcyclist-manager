import { useContext } from 'react'
import ThemeContext from '../context/ThemeContextProvider'

export default function Resources({ hour, onClick, resourceTaken }){

    const { theme } = useContext(ThemeContext)
    const { colors } = theme 

    const resourceIsTaken = () => resourceTaken[hour]

    const style = taken => ({
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.font,
        backgroundColor: taken ? 'green' : ''
    })

    const disponibility = 8

    return(
        <div style={ style(resourceIsTaken()) } onClick={ () => onClick(hour) }>
            {disponibility}
        </div>
    )
}