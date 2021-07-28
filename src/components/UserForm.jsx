import UsernameInput            from './UsernameInput'
import PopupButtonsContainer    from './PopupButtonsContainer'
import Button                   from './Button'
import useForm from '../hooks/useForm'

export default function UserForm({ setPopup }){
    
    const { setOp, setUsername, handleSubmit, errors } = useForm()

    const style = {
        
        display: 'grid',
        width: '100%',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '10% 25% 1fr',
        gridColumn: '2/3',
        gridRow: '2/3'
    }

    return(
        <form onSubmit={e =>
                    handleSubmit(e)
                        .then(() => setPopup(false))
                        .catch(err => {throw err}) 
                    } 
                style={style}>
            <UsernameInput onChange={({target}) => {setUsername(target.value)}}/>
            {errors.username && errors.username}
            <PopupButtonsContainer>
                <Button 
                    onClick ={() => {setOp('login')}} 
                    propStyle = {{gridColumn: '1/2', gridRow: '3/4'}}> 
                    Iniciar Sesion
                </Button>
                <Button 
                    onClick ={() => {setOp('register')}}
                    propStyle ={{gridColumn: '2/3', gridRow: '3/4'}}> 
                    Registrarse 
                </Button>
            </PopupButtonsContainer>
        </form>
    )
}