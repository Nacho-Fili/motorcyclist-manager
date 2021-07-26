import axios from 'axios'
const ENDPOINT = 'https://motorcyclist-manager-api.herokuapp.com'

const userService = {

    createUser: username => {
        return axios.post(`${ENDPOINT}/create-user?username=${username}`)
    },

    login: username => {
        return axios.post(`${ENDPOINT}/login?username=${username}`)
            .then(({ data }) => {
                const { username, id } = data.userLogged
                localStorage.setItem('username', username)
                localStorage.setItem('id', id)
                return username
            })
    },

    userLogged: () => {
        const username = localStorage.getItem('username')
        const id = localStorage.getItem('id')

        return (username && id) ? { username, id } : null
    },

    logout: () => { 
        localStorage.removeItem('username')
        localStorage.removeItem('id')
    }

}

export default userService