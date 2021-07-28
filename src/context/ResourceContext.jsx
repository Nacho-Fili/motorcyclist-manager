import useResource from '../hooks/useResource'
import React from 'react'

const Context = React.createContext({})

export function ResourceContextProvider({ children }){

    const { resourcesTaken, takeResource, save } = useResource()

    return(
        <Context.Provider value={{ resourcesTaken, takeResource, save}}>
            { children }
        </Context.Provider>
    )
}

export default Context