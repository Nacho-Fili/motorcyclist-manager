import TimeManager from '../model/TimeManager'
import config from '../config'

const resourceService = {
    save: resourceStatus => {
        for(const [hour, state] of Object.entries(resourceStatus)){
            console.log(`Guardando horario ${hour}`)
            
            state
            ? localStorage.setItem(hour, state)
            : localStorage.removeItem(hour)
             
        }
    },
    
    initialState: () => {
        const { initialTime, endTime, separator } = config
        const timeManager = new TimeManager(initialTime, endTime, separator)
        const times = timeManager.stringifyList() 

        const initialState = {} 
        let currentElementState

        times.forEach(e => {
            currentElementState = localStorage.getItem(e)
            if(currentElementState) initialState[e] = true
        })

        console.log(initialState)

        return initialState
    }
}

export default resourceService