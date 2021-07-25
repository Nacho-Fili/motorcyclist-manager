export default function PopupButtonsContainer({ children }){

    const style = {
        display: 'flex',
        width: '75%',
        height: '20%',
        justifyContent: 'space-between'
    }

    return(
        <div style={style}>
            { children }
        </div>
    )
}