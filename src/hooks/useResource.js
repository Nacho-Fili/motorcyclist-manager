import { useState }     from 'react'
import resourceService  from '../services/resourceService'
import userService      from '../services/usersService'

export default function useResource(){
    const [ resourceTaken, setResourceTaken ] = useState(resourceService.initialState())

    const takeResource = hour => {
        const newObject = {...resourceTaken}
        newObject[hour] = !newObject[hour]
        setResourceTaken(newObject)
    }

    const save = () => {
        resourceService.save(resourceTaken, userService.userLogged())
    }

    return({
        takeResource,
        resourceTaken,
        save
    })
}