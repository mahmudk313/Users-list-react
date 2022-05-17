import { useState } from 'react';

import './App.css';

//import components
import Controls from './components/users/controls';
import ListShow from './components/users/listShow';
import AddBox from './components/users/addBox'

function App() {

  const [addStatus, setAddStatus] = useState(false);
  const [usersState, setUsersState] = useState({
    users: [
      // State.users Props
      // {
      //     name : 'mahmud',
      //     lastName : 'bak',
      //     permission : 'admin',
      //     joinDate : '1400',
      //     email : 'mkm',
      //     id : 1,
      //     skill : 1,
      //     detail : 1
      // }
    ],
    usersListStatus: true
  });


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

  //state changes here and get the props from AddBox component
  let addUser = (user) => {
    setUsersState(prevState => {
      console.log(user)
      return {
        ...prevState,
        users: [
          ...prevState.users,
          {
            name: user.name,
            lastName: user.lastName,
            permission: user.permission,
            birthDate: user.birthDate,
            email: user.email,
            id: user.id,
            skill: user.skill,
            detail: user.detail,
            key: Date.now(),
            joinDate: getCurrentDate()

          }
        ]
      }
    })
  }

  //changes the addStatus, get value from Controls component -> add Button
  const addStatusToggle = status => {
    setAddStatus(status)
  }

  let deleteUser = key => {
    setUsersState(prevState => {
      return {
        ...prevState,
        users: prevState.users.filter(item => item.key !== key)
      }
    })
  }

  let listShowToggle = e => {
    setUsersState(prevState => {
      return {
        ...prevState,
        usersListStatus: !prevState.usersListStatus
      }
    })
  }

  return (
    <main>
      <div className={addStatus ? "blur" : ""}>
        <Controls addStatus={addStatusToggle} listShowToggle={listShowToggle} />
        {
          usersState.usersListStatus
            ? <ListShow
              state={usersState}
              delete={deleteUser} />
            : ''
        }
      </div>
      {
        addStatus
          ? <AddBox
            addStatus={addStatusToggle}
            add={addUser} />
          : ''
      }
    </main>
  );
}

export default App;
