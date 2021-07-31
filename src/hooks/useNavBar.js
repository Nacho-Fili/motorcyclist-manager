
export default function useNavBar(setPopup, userLogged, save){

    const handleSave = () => {
        if(!userLogged.username) setPopup(true)
        else save()
    }

    return({
        handleSave
    })
}