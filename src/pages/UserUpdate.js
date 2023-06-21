import {useLocation} from "react-router-dom"
import UserForm from "../components/UserForm";
function UserUpdate(){
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    return(
        <>
            <UserForm id = {id}/>
        </>
    )
}
export default UserUpdate