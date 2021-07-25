import axios from 'axios'
const ENDPOINT = 'http://localhost:8000'

const userService = {

    createUser: username => {
        return axios.post(`${ENDPOINT}/create-user?username=${username}`)
    },

    login: username => {
        return axios.post(`${ENDPOINT}/login?username=${username}`)
            .then(({ data }) => {
                localStorage.setItem('username', data.username)
                localStorage.setItem('id', data.id)
                return data.username
            })
    },

    userLogged: () => {
        const username = localStorage.getItem('username')
        const id = localStorage.getItem('id')

        return (username && id) ? { username, id } : null
    }

}

export default userService