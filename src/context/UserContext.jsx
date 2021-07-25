import React    from 'react'
import useUser  from '../hooks/useUser'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
    
    const { userLogged, login, create } = useUser()
    
    return(
        <Context.Provider value={{userLogged, login, create}}>
            { children }
        </Context.Provider>
    )
}


export default Context