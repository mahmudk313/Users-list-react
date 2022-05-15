import { useState } from 'react';

import './App.css';

//import components
import Controls from './Components/Controls';
import ListShow from './Components/ListShow';
import AddBox from './Components/AddBox'

function App() {

  const [addStatus, setAddStatus] = useState(false);
  const [usersState, setUsersState] = useState({
    users : [
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
    ]
  });


  //state changes here and get the props from AddBox component
  let addUser = (user) => {
    setUsersState(prevState => {
      console.log(user)
      return {
        users : [
          ...prevState.users,
          {
            name : user.name,
            lastName : user.lastName,
            permission : user.permission,
            birthDate : user.birthDate,
            email : user.email,
            id : user.id,
            skill : user.skill,
            detail : user.detail,
            key : Date.now()
          }
        ]
      }
    })
  }

  //changes the addStatus, get value from Controls component -> add Button
  let addStatusToggle = status => {
    setAddStatus(status)
  }

  return (
    <main> 
      <div className={addStatus?"blur":""}>
        <Controls addStatus={addStatusToggle} />
        <ListShow state={usersState} />

      </div>
      {
        addStatus
        ? <AddBox addStatus={addStatusToggle} add={addUser} />
        : ''
      }
    </main>
  );
}

export default App;
