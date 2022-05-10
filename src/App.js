import { useState } from 'react';

import './App.css';

//import components
import Controls from './Components/Controls';
import ListShow from './Components/ListShow';

function App() {

  const [addStatus, setAddStatus] = useState(false);
  const [userState, setUserState] = useState({
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
    setUserState({
      users : {
        name : user.name,
        lastName : user.lastName,
        permission : user.permission,
        joinDate : user.joinDate,
        email : user.email,
        id : user.id,
        skill : user.skill,
        detail : user.detail
      }
    })
  }

  return (
    <main> 
      <ListShow state={userState} />
      {
    </main>
  );
}

export default App;
