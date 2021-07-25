import axios from 'axios'
const ENDPOINT = 'https://motorcyclist-manager-api.herokuapp.com'

const getDisponibilityByHour = async hour => {
    try {
        return await axios.get(`${ENDPOINT}/disponibility?hour=${hour}`)
    } catch(err) {
        throw err
    }
       
}

export { getDisponibilityByHour }