import userService from "../services/usersService"

export default function useUser(){

    const userLogged = () => userService.userLogged()

    const login = async username => await userService.login(username)

    const create = async username => await userService.createUser(username)

    return({
        userLogged,
        login,
        create
    })
}