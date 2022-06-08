import { useState } from "react";
import Input from "./../Layout/Input";
import axios from "axios";

//redux tools
import { useSelector,useDispatch } from 'react-redux';
import { updateUser } from "./../../store/Slices/UsersSlice"

// This component called when we want to change the values of a user
// This component use Input component and send a custom boolen attribute that activate edit inputs style
// An event handler, will handle changes and on clicking edit button again will call edit function from props and submit changes and update UsersState
function Edit (props) {
        
    const [user, setUserState] = useState(props.user);
    const usersState = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    let editHandler = async (user) => {
        let {key} = user;
        let updatedUsers = usersState.filter(item => item.key !== key);
        try {
            let updatedUser = await axios.put(`https://6287ab4260c111c3ead01bd8.endapi.io/usersList/${user.id}`, {
                ...user
            })
            updatedUsers.push(updatedUser.data.data)
            dispatch(updateUser(updatedUsers))
            props.edit()
        } catch (e) {
        console.log(e)
        }
    }

    //Handlers
    let inputHandler = (e) => {
        e.preventDefault();
        let [inputName, inputValue] = [e.target.name,e.target.value];
        setUserState(prevState => {
            return {
                ...prevState, 
                [inputName] : inputValue
                
            }
        });    
    }
    //get name and value of input and add it to UserState
    
    return (
        <tr>
                <td><Input edit={true} value={user.name} onChange={inputHandler} type="text" id="name" /></td>
                <td><Input edit={true} value={user.lastName} onChange={inputHandler} type="text" id="lastName" /></td>
                <td>{user.permission}</td>
                <td>{user.joinDate}</td>
                <td><Input edit={true} value={user.email} onChange={inputHandler} type="text" id="email" /></td>
                <td>{user.id}</td>
                <td><Input edit={true} value={user.skill} onChange={inputHandler} type="text" id="skill" /></td>
                <td>
                    <button 
                        className="sq-btn users-ctrl-btn edit-btn visible"
                        type="button"
                        onClick={()=> editHandler(user)}
                    >
                    </button>

                    <button 
                        className="sq-btn users-ctrl-btn delete-btn visible"
                        type="button"
                        onClick={()=> props.delete(user.id)}
                        >
                    </button>
                </td>
            </tr>
    )
}

export default Edit;