import axios from 'axios'

const ENDPOINT = 'https://motorcyclist-manager-api.herokuapp.com'

const resourceService = {
    save: async (resourceStatus, {id, username}) => {
        const resourcesToSave = {}

        for(const [hour, state] of Object.entries(resourceStatus)){
            try{
                const { data } = await axios.get(`${ENDPOINT}/hour-is-taken?id=${id}&hour=${hour}`)
                if(!(data.isTaken))
                    resourcesToSave[hour] = state
            } catch(err){
                throw err
            }
        }

        axios.post(`${ENDPOINT}/take-resources?id=${id}`, { resourcesToSave })
    },
    
    initialState: async (userLogged, hour) => {

        if(!userLogged) return false
        
        const { id } = userLogged
        if(!id) return false

        const { data } = await axios.get(`${ENDPOINT}/hour-is-taken?id=${id}&hour=${hour}`)

        return data
    }
}

export default resourceService