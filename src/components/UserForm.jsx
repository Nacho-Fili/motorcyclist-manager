import UsernameInput            from './UsernameInput'
import { useState, useContext } from 'react'
import PopupButtonsContainer    from './PopupButtonsContainer'
import Button                   from './Button'
import UserContext              from '../context/UserContext'

export default function UserForm({ setPopup }){
    
    const [op, setOp] = useState('login')
    const [username, setUsername] = useState('')
    const [errors, setErrors] = useState({})
    
    const { login, create } = useContext(UserContext)

    const style = {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    const handleSubmit = async e => {
        
        e.preventDefault()
        
        if(username.includes('=') || username.includes("'") || username.includes('"')){
            console.log('Forbiden char')
            setErrors({username: 'invalid: username can\'t includes =, \' or "'})
            return
        }
            
        if(op === 'login'){
            try{
                await login(username)
                setPopup(false)
            } catch(err){
                console.error(err)
            }
        }
        else{
            try{
                create(username)
                setPopup(false)
            } catch(err){
                console.error(err)
            }
        }
    }

    return(
        <form onSubmit={ handleSubmit } style={style}>
            <UsernameInput onChange={({target}) => {setUsername(target.value)}}/>
            {errors.username && errors.username}
            <PopupButtonsContainer>
                <Button onClick ={() => {setOp('login')}} > Iniciar Sesion </Button>
                <Button onClick ={() => {setOp('register')}}> Registrarse </Button>
            </PopupButtonsContainer>
        </form>
    )
}