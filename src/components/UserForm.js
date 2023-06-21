import { useState } from "react"
import { useDispatch} from "react-redux";
import { adduser, updateuser } from "../redux/UserRedux";
import {useHistory} from "react-router-dom"
function UserForm({id}){
    const [name, setname] = useState("")
    const [emailaddress, setemailaddress] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const dispatch = useDispatch();
    const history = useHistory()
    function handleemail(e){
        setemailaddress(e.target.value)
    }
    function handlename(e){
        setname(e.target.value)
    }
    function handlephone(e){
        setphonenumber(e.target.value)
    }
    function handlesubmit(e){
        e.preventDefault()
        let isvalid = true
        if(name.trim() === ''){
            isvalid = false
            console.log("name");
        }
        if(!/^\d{10}$/.test(phonenumber)){
            isvalid = false
            console.log("number");
        }
        if(!/^\S+@\S+\.\S+$/.test(emailaddress)){
            isvalid = false
            console.log("email");
        }
        if(isvalid){
            if(id) {
                dispatch(updateuser({emailaddress, name, phonenumber, id}))
                history.push("/")
                }
            else dispatch(adduser({emailaddress, name, phonenumber}))
            setemailaddress('')
            setname('')
            setphonenumber('')
        }
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            value={name}
            onChange={handlename}
            />
            <label htmlFor="email">Email Address:</label>
            <input
            type="email"
            value={emailaddress}
            onChange={handleemail}
            />
            <label htmlFor="phone">Phone Number:</label>
            <input
            type="text"
            value={phonenumber}
            onChange={handlephone}
            />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default UserForm