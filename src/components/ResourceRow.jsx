import { useContext } from 'react'
import ThemeContext from '../context/ThemeContextProvider'
import Time from './Time'
import Resources from './Resources'


export default function ResourceRow({ children, hour, resourceTaken, takeResource }){
    
    const { theme } = useContext(ThemeContext)

    const { colors } = theme

    const style = {
        display: 'flex',
        height: '8vh',
        borderTop: `2px solid ${colors.other_1}`,
        backgroundColor: colors.base,
        margin: 5,
        borderRadius: 3
    }

    return(
        <div style={ style }>
            <Time>
                { children }
            </Time>
            <Resources hour={ hour } resourceTaken={resourceTaken} onClick={takeResource}/>
        </div>
    )
}