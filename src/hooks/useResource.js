import { useState }     from 'react'
import resourceService  from '../services/resourceService'

export default function useResource(){
    const [ resourceTaken, setResourceTaken ] = useState(resourceService.initialState())

    const takeResource = hour => {
        const newObject = {...resourceTaken}
        newObject[hour] = !newObject[hour]
        setResourceTaken(newObject)
    }

    const save = () => {
        resourceService.save(resourceTaken)
    }

    return({
        takeResource,
        resourceTaken,
        save
    })
}