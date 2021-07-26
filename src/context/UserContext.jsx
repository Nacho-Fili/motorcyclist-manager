import React    from 'react'
import useUser  from '../hooks/useUser'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
    
    const { userLogged, login, create, logout } = useUser()
    
    return(
        <Context.Provider value={{userLogged, login, create, logout}}>
            { children }
        </Context.Provider>
    )
}


export default Context