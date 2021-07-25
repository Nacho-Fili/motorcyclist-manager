import { useContext }           from 'react'
import ThemeContext             from '../context/ThemeContextProvider'
import UserForm                 from './UserForm'

export default function SessionManagerPopup({ setPopup }){

    const innerPopupWidth = 40
    const innerPopupHeight = 40

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
            inset: `${50 - innerPopupHeight/2}% ${50 - innerPopupWidth/2}%`,
            width: innerPopupWidth+'%',
            height: innerPopupHeight+'%',
            backgroundColor: colors.base,
            border: `3px solid ${colors.other_1}`
        }
    }

    return(
        <div style={style.popup}>
            <div style={style.innerPopup}>
                <UserForm setPopup={setPopup}/>
            </div>
        </div>
    )
}