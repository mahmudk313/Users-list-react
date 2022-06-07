import {useState} from 'react';
import EditUser from './EditUser';
import Alert from '../Layout/Alert';

function Users(props) {
    let {user} = props;

    const [mouseState, setMouseState] = useState(false);
    const [edit, setEdit] = useState(false);
    const [show, setShow] = useState(false);

    let editStatus = () => {
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
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.permission}</td>
                            <td>{user.joinDate}</td>
                            <td>{user.email}</td>
                            <td>{user.id}</td>
                            <td>{user.skill}</td>
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
                                    onClick={()=> props.delete(user.id) }
                                    >
                                </button>
                            </td>
                        </tr>
                    )
                    : <EditUser user={user} delete={props.delete} edit={editStatus} />
                    
            }
        </>
    )
}

export default Users;