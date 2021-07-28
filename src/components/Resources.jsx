import { useContext, useEffect, useState } from 'react'
import ResourceContext from '../context/ResourceContext'
import ThemeContext from '../context/ThemeContextProvider'
import UserContext from '../context/UserContext'
import { getDisponibilityByHour } from '../services/disponibilityService'
import resourceService from '../services/resourceService'

export default function Resources({ hour }){

    const [disponibility, setDisponibility] = useState('loading...')
    const [resourceTaken, setResourceTaken] = useState(false)
    const { userLogged } = useContext(UserContext)
    const { takeResource } = useContext(ResourceContext)

    const { theme } = useContext(ThemeContext)
    const { colors } = theme 

    const style = taken => ({
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.font,
        backgroundColor: taken ? 'green' : ''
    })

    const onClick = () => {
        takeResource(hour, !resourceTaken)
        setResourceTaken(!resourceTaken)
    }

    useEffect(() => {
        const getData = async () =>{
            const { data } = await getDisponibilityByHour(hour)
            setDisponibility(data.disponibility)
            const resourceTaken = await resourceService.initialState(userLogged, hour)
            setResourceTaken(resourceTaken)
        }
        getData()
    }, [hour, userLogged])

    return(
        <div style={ style(resourceTaken) } onClick={ onClick }>
            { disponibility }
        </div>
    )
    
    
}