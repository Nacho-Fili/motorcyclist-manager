import Button           from './Button' 

export default function CloseButton({ setPopup }) {

    const style = {
        gridColumn: '0/1',
        height: 40,
        width: 40,
        margin: 0
    }

    return(
        <Button
            onClick={() => setPopup(false)}
            height={30}
            width={30}
            propStyle={style}>
                X
        </Button>
    )
}