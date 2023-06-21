import { useDispatch, useSelector } from "react-redux";
import { delteuser } from "../redux/UserRedux";
import { NavLink } from "react-router-dom";
function UserList(){
    const users = useSelector(state => state.user.users)
    const dispatch = useDispatch()
    console.log(users);
    function handleDelete(userid){
        dispatch(delteuser(userid))
    }
    return(
        <>
        {
        users.map((user, id) => {
            return(
                <div>
                <h1>{user.emailaddress}</h1>
                <h2>{user.phonenumber}</h2>
                <h3>{user.name}</h3>
                <button onClick={() => handleDelete(id)}>Delete</button>
                <button>
                    <NavLink to = {`/userupdate/${id}`}>
                        Update
                    </NavLink>
                </button>
                </div>
            )
        })
        }
        </>
    )
}
export default UserList;