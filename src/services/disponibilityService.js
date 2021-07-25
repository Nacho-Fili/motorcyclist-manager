import axios from 'axios'
const ENDPOINT = 'http://localhost:8000'

const getDisponibilityByHour = async hour => {
    try {
        return await axios.get(`${ENDPOINT}/disponibility?hour=${hour}`)
    } catch(err) {
        throw err
    }
       
}

export { getDisponibilityByHour }