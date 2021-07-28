import { useState }     from 'react'
import resourceService  from '../services/resourceService'
import userService      from '../services/usersService'

export default function useResource(){
    
    const initialState = resourceService.initialState(userService.userLogged())

    const [ resourcesTaken, setResourceTaken ] = useState(initialState)

    const takeResource = (hour, resourceStatus) => {
        const newObject = {...resourcesTaken}
        newObject[hour] = resourceStatus
        setResourceTaken(newObject)
    }

    const save = () => {
        console.log(resourcesTaken)
        resourceService.save(resourcesTaken, userService.userLogged())
    }

    return({
        resourcesTaken,
        takeResource,
        save
    })
}