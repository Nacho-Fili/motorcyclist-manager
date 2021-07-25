import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContextProvider'
import { getDisponibilityByHour } from '../services/disponibilityService'

export default function Resources({ hour, onClick, resourceTaken }){

    const [disponibility, setDisponibility] = useState('none')

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

    

    useEffect(() => {
        const getData = async () =>{
            const { data } = await getDisponibilityByHour(hour)
            setDisponibility(data.quantity)
        }
        getData()
    }, [hour])

    return(
        <div style={ style(resourceIsTaken()) } onClick={ () => onClick(hour) }>
            { disponibility }
        </div>
    )
    
    
}