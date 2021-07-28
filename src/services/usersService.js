import axios from 'axios'
const ENDPOINT = 'https://motorcyclist-manager-api.herokuapp.com'

const userService = {

    createUser: username => {
        return axios.post(`${ENDPOINT}/create-user?username=${username}`)
    },

    login: async usernameToLog => {
        try{
            const { data } = await axios.post(`${ENDPOINT}/login?username=${usernameToLog}`)
            const { username, id } = data.userLogged 
            localStorage.setItem('username', username)
            localStorage.setItem('id', id)
            return {id, username}
        } catch(err){
            throw err
        }   
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