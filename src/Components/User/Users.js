import {useState} from 'react';
import EditUser from './EditUser';
import Alert from '../Layout/Alert';

function Users(props) {
    let {usersList} = props;

    const [mouseState, setMouseState] = useState(false);
    const [edit, setEdit] = useState(false);
    const [show, setShow] = useState(false);

    let editHandler = (user) => {
        props.edit(user);
        setEdit(false)
    }

    let showToggler = (e) => {
        setShow(!show);
    }
    return(
        <>
            {
                ! edit
                    ? (
                        <tr onMouseEnter={()=>setMouseState(true)} onMouseLeave={()=>setMouseState(false)} >
                            <td>{usersList.name}</td>
                            <td>{usersList.lastName}</td>
                            <td>{usersList.permission}</td>
                            <td>{usersList.joinDate}</td>
                            <td>{usersList.email}</td>
                            <td>{usersList.id}</td>
                            <td>{usersList.skill}</td>
                            <td>
                                <button 
                                    className={`sq-btn users-ctrl-btn edit-btn ${mouseState ? "visible" : ""}`}
                                    type="button"
                                    onClick={()=>setEdit(true)}
                                    >
                                </button>

                                <button 
                                    className={`sq-btn users-ctrl-btn delete-btn ${mouseState ? "visible" : ""}`}
                                    type="button"
                                    onClick={()=> props.delete(usersList.key) }
                                    >
                                </button>
                            </td>
                        </tr>
                    )
                    : <EditUser user={usersList} delete={props.delete} edit={editHandler} />
                    
            }
        </>
    )
}

export default Users;