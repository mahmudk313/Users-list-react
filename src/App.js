import { useState } from 'react';
import './App.css';
//import components
import Controls from './components/users/controls';
import ListShow from './components/users/listShow';
import AddBox from './components/users/addBox'

function App() {

  const [addStatus, setAddStatus] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [usersState, setUsersState] = useState([]);
  const [usersListStatus, setUsersListStatus] = useState(true)


  const getCurrentDate = () => {
    const today = new Date()
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
    }
    const now = today.toLocaleString('fa-IR', options)
    return now
  }

  // Add and Edit user
  const handleAddUser = (user) => {
    if (user.key !== undefined) {
      const otherUsers = usersState.filter(item => item.key !== user.key);
      setUsersState([
        {
          ...user
        },
        ...otherUsers
      ])
    } else {
      setUsersState([...usersState, {
        ...user,
        key: Date.now(),
        joinDate: getCurrentDate()

      }]);
    }
  }

  //changes the addStatus, get value from Controls component -> add Button
  const addStatusToggle = status => {
    setAddStatus(status)
  }

  const deleteUser = key => {
    const updatedUsers = usersState.filter(item => item.key !== key);
    setUsersState([...updatedUsers])
  }

  const handleEditUser = userData => {
    setAddStatus(true);
    setEditUser(userData)
  }

  const listShowToggle = () => {
    setUsersListStatus(!usersListStatus)
  }

  return (
    <main>
      <div className={addStatus ? "blur" : ""}>
        <Controls addStatus={addStatusToggle} listShowToggle={listShowToggle} />
        {
          usersListStatus
            ? <ListShow
              users={usersState}
              delete={deleteUser}
              edit={handleEditUser}
            />
            : ''
        }
      </div>
      {
        addStatus
          ? <AddBox
            addStatus={addStatusToggle}
            add={handleAddUser}
            editUser={editUser}
            setEditUser={setEditUser}
          />
          : ''
      }
    </main>
  );
}

export default App;
