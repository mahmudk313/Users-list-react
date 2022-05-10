

function Users(user) {
    let {usersList} = user;
    
    return(
        <>
            <tr>
                <td>{usersList.name}</td>
                <td>{usersList.lastName}</td>
                <td>{usersList.permission}</td>
                <td>{usersList.joinDate}</td>
                <td>{usersList.email}</td>
                <td>{usersList.id}</td>
                <td>{usersList.skill}</td>
                <td>{usersList.dtail}</td>
            </tr>
        </>
    )
}

export default Users;