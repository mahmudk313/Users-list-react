import { useState } from "react";
import Input from "./../Layout/Input";

// This component called when we want to change the values of a user
// This component use Input component and send a custom boolen attribute that activate edit inputs style
// An event handler, will handle changes and on clicking edit button again will call edit function from props and submit changes and update UsersState
function Edit (props) {
        
    const [userState, setUserState] = useState({user:props.user});

    //Handlers
    let inputHandler = (e) => {
        e.preventDefault();
        let [inputName, inputValue] = [e.target.name,e.target.value];
        
        setUserState(prevState => {
            return {
                user : {...prevState.user, 
                    [inputName] : inputValue
                }
            }
        });

        
    }
    //get name and value of input and add it to UserState
    
    return (
        <tr>
                <td><Input edit={true} value={userState.user.name} onChange={inputHandler} type="text" id="name" /></td>
                <td><Input edit={true} value={userState.user.lastName} onChange={inputHandler} type="text" id="lastName" /></td>
                <td>{userState.user.permission}</td>
                <td>{userState.user.joinDate}</td>
                <td><Input edit={true} value={userState.user.email} onChange={inputHandler} type="text" id="email" /></td>
                <td><Input edit={true} value={userState.user.id} onChange={inputHandler} type="text" id="id" /></td>
                <td><Input edit={true} value={userState.user.skill} onChange={inputHandler} type="text" id="skill" /></td>
                <td>
                    <button 
                        className="sq-btn users-ctrl-btn edit-btn visible"
                        type="button"
                        onClick={()=> props.edit(userState.user)}
                    >
                    </button>

                    <button 
                        className="sq-btn users-ctrl-btn delete-btn visible"
                        type="button"
                        onClick={()=> props.delete(userState.key)}
                        >
                    </button>
                </td>
            </tr>
    )
}

export default Edit;