import { useState, useContext } from 'react'
import userContext              from '../context/UserContext'

export default function useForm(){

    const [ op, setOp ]             = useState('login')
    const [ username, setUsername ] = useState('')
    const [ errors, setErrors ]     = useState({})
    const { login, create }         = useContext(userContext)

    const forbiddenChars = [ '?', '=', '/', '&', '|' ]
    const usernameErrorText = "El nombre de usuario no puede contener ?, =, /, &, | "

    const tryLogin = async username => {
        try {
            return await login(username)
        } catch(err) {
            throw err
        }
    }

    const register = async username => {
        try {
           return await create(username)
        } catch(err) {
            throw err
        }
    }

    const ops = { login: tryLogin, register: register }

    

    const checkErrors = username => {
        forbiddenChars.forEach(char => {
            username.includes(char)
            && (setErrors({username: usernameErrorText}))
        });
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setErrors({})
        checkErrors(username)
        
        if(errors.username) throw 'Username incorrect'
        
        return ops[op](username)
    }

    return({
        setOp,
        setUsername,
        handleSubmit,
        errors
    })
}