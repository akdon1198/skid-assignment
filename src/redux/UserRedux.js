import {createSlice} from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name : "user",
    initialState : {
        users : JSON.parse(localStorage.getItem("ManyUser")) || []
    },
    reducers : {
        adduser : (state, action)=> {
            state.users.push(action.payload)
            localStorage.setItem("ManyUser", JSON.stringify(state.users))
        },  
        updateuser : (state, action) =>{
            const{emailaddress, name, phonenumber, id} = action.payload
            state.users = JSON.parse(localStorage.getItem("ManyUser"))
            const userId = state.users.find((user, Id) => {
                return Id == id
            })
            Object.assign(userId, {emailaddress, name, phonenumber});
            localStorage.setItem("ManyUser", JSON.stringify(state.users))
        },
        delteuser : (state, action) =>{
            state.users = state.users.filter((user, id) => id !== action.payload)
            localStorage.setItem("ManyUser", JSON.stringify(state.users))
        }
    }
})

export const {adduser, updateuser, delteuser} = UserSlice.actions
export default UserSlice.reducer
