import { useState } from 'react';

function Users(props) {
    let { usersList } = props;

    const [mouseState, setMouseState] = useState(false)

    return (
        <>
            <tr onMouseEnter={() => setMouseState(true)} onMouseLeave={() => setMouseState(false)} >
                <td>{usersList.name}</td>
                <td>{usersList.lastName}</td>
                <td>{usersList.permission}</td>
                <td>{usersList.joinDate}</td>
                <td>{usersList.email}</td>
                <td>{usersList.id}</td>
                <td>{usersList.skill}</td>
                <td>
                    <button
                        className={`sq-btn users-ctrl-btn delete-btn ${mouseState ? "visible" : ""}`}
                        type="button"
                        onClick={() => props.delete(usersList.key)}
                    >
                    </button>
                    <button
                        className={`sq-btn users-ctrl-btn edit-btn ${mouseState ? "visible" : ""}`}
                        type="button"
                        onClick={() => props.edit(usersList)}
                    >
                    </button>

                </td>
            </tr>
        </>
    )
}

export default Users;