import {useState} from 'react';
import EditUser from './EditUser';
import Alert from '../Layout/Alert';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteUser } from "../../store/slices/UsersSlice"

function Users(props) {
    let {user} = props;
    const dispatch = useDispatch(); 

    const [mouseState, setMouseState] = useState(false);
    const [edit, setEdit] = useState(false);
    const [show, setShow] = useState(false);

    let editStatus = () => {
        setEdit(false)
    }

    let showToggler = (e) => {
        setShow(!show);
    }

    let deleteUsers = async (id) => {
        try {
            await axios.delete(`https://6287ab4260c111c3ead01bd8.endapi.io/usersList/${id}`)
            dispatch(deleteUser(id))
        } catch (e) {
            console.log(e)
        }
    };


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
                                    onClick={()=> deleteUsers(user.id) }
                                    >
                                </button>
                            </td>
                        </tr>
                    )
                    : <EditUser user={user} delete={deleteUsers} edit={editStatus} />
                    // <Alert delete={props.delete} key={usersList.key} show={showToggler} />
                    
            }
        </>
    )
}

export default Users;