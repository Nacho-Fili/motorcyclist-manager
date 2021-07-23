import config       from '../config'
import TimeManager  from '../model/TimeManager'
import ResourceRow  from './ResourceRow'  
import { useContext } from 'react'
import ResourceContext from '../context/ResourceContext'

export default function ResourceRowContainer(){

    const { resourceTaken, takeResource } = useContext(ResourceContext)
    const { initialTime, endTime, separator } = config
    const timeManager = new TimeManager(initialTime, endTime, separator)
    const times = timeManager.stringifyList() 
    const htmlTimes = times.map(time =>  
        <ResourceRow resourceTaken={resourceTaken} 
            takeResource={takeResource} 
            key={time} 
            hour={time}>
                {time}
        </ResourceRow>
    )

    const style = {
        width: '80vw',
    }

    return(
        <div style={style}>
            { htmlTimes }
        </div>
    )
}