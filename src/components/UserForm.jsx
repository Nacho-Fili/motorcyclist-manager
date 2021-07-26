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
        
        display: 'grid',
        width: '100%',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '10% 25% 1fr',
        gridColumn: '2/3',
        gridRow: '2/3'
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
                <Button 
                    onClick ={() => {setOp('login')}} 
                    propStyle = {{gridColumn: '1/2', gridRow: '3/4'}}
                    > Iniciar Sesion </Button>
                <Button 
                    onClick ={() => {setOp('register')}}
                    propStyle ={{gridColumn: '2/3', gridRow: '3/4'}}
                    > Registrarse </Button>
            </PopupButtonsContainer>
        </form>
    )
}