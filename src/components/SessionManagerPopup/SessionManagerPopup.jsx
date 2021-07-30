import { useContext }           from 'react'
import ThemeContext             from '../../context/ThemeContextProvider'
import UserForm                 from '../UserForm'
import CloseButton              from '../CloseButton'
import './SessionManagerPopup.css'

export default function SessionManagerPopup({ setPopup }){

    const { theme }     = useContext(ThemeContext)
    const { colors }    = theme

    const style = {
        popup: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
        },
        innerPopup: {
            position: 'absolute',
            backgroundColor: colors.base,
            border: `3px solid ${colors.other_1}`,
            display: 'grid',
            gridTemplateColumns: '1fr 80% 1fr',
            gridTemplateRows: '20% 1fr'
        }
    }

    return(
        <div style={style.popup}>
            <div style={style.innerPopup} className='inner-popup'>
                <CloseButton setPopup={setPopup}/>
                <UserForm setPopup={setPopup}/> 
            </div>
        </div>
    )
}

