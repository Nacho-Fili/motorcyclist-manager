import TimeManager from '../model/TimeManager'
import axios from 'axios'
import config from '../config'

const ENDPOINT = 'https://motorcyclist-manager-api.herokuapp.com'

const resourceService = {
    save: async (resourceStatus, {id, username}) => {
        const resourcesToSave = {}
        console.log(id, username)
        for(const [hour, state] of Object.entries(resourceStatus)){
            try{
                const { data } = await axios.get(`${ENDPOINT}/hour-is-taken?id=${id}&hour=${hour}`)
                if(!(data.isTaken))
                    resourcesToSave[hour] = state
            } catch(err){
                throw err
            }
        }
        console.log(resourcesToSave)
        axios.post(`${ENDPOINT}/take-resources?id=${id}`, { resourcesToSave })
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

        return initialState
    }
}

export default resourceService