export default function PopupButtonsContainer({ children }){

    const style = {
        display: 'flex',
        width: 'auto',
        height: '40%',
        justifyContent: 'space-between',
        gridRow: '3/4',
        gridColumn: '1/2'
    }

    return(
        <div style={style}>
            { children }
        </div>
    )
}