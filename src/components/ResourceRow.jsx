import { useContext } from 'react'
import ThemeContext from '../context/ThemeContextProvider'
import Time from './Time'
import Resources from './Resources'
import ResourceContext from '../context/ResourceContext'

export default function ResourceRow({ children, hour }){
    
    const { theme } = useContext(ThemeContext)
    const { resourceTaken, takeResource } = useContext(ResourceContext)

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
            <Resources resourceTaken={resourceTaken} hour={ hour } onClick={takeResource}/>
        </div>
    )
}