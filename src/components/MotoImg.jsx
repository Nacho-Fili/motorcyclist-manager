import motoURL from '../images/scooter.png'

export default function MotoImg(){

    const style = {
        height: 'auto',
        maxWidth: '8%',
        minWidth: '10px',
        maxHeight: '90%',
        padding: '0 2%',
    }
    
    return(
        <img src={motoURL} alt='Motorcycle' style={style}/>
    )
}