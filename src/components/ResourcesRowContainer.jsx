import config       from '../config'
import TimeManager  from '../model/TimeManager'
import ResourceRow  from './ResourceRow'  

export default function ResourceRowContainer(){

    const { initialTime, endTime, separator } = config
    const timeManager = new TimeManager(initialTime, endTime, separator)
    const times = timeManager.stringifyList() 
    
    const htmlTimes = times.map(time =>  
        <ResourceRow 
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