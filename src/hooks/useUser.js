import { useState } from 'react'
import userService from '../services/usersService'

export default function useUser(){

    const [ userLogged, setUserLogged ] = useState(userService.userLogged() || {})

    const login = async username => {
        const user = await userService.login(username)
        user && setUserLogged(user)
        return user
    }

    const create = async username => await userService.createUser(username)

    const logout = () => {
        setUserLogged({})
        userService.logout()
    }

    return({
        userLogged,
        login,
        create,
        logout
    })
}