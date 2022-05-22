import { useEffect, useState } from "react";

import "./App.css";

//import components
import Controls from "./Components/Layout/Controls";
import ListShow from "./Components/User/ListShow";
import AddBox from "./Components/AddBox";
import axios from "axios";

function App() {
  const [addStatus, setAddStatus] = useState(false);
  const [usersState, setUsersState] = useState({
    users: [],
    usersListStatus: true,
  });

  useEffect(() => {
    getUsersList();
  },[])
  
  const getUsersList = async () => {
    let list = await axios.get(`https://6287ab4260c111c3ead01bd8.endapi.io/usersList`)
    setUsersState((prevstate)=>{
      return {
        ...prevstate,
        users : [
          ...list.data.data
        ]
      }
    })
    console.log(list.data.data)
  }
  
  //state changes here and get the props from AddBox component
  let addUser = async (user) => {
    const joinDate = new Date().toLocaleDateString("fa-IR");
    user.key = Date.now();
    user.joinDate = joinDate;
    console.log(user)
    await axios.post(`https://6287ab4260c111c3ead01bd8.endapi.io/usersList`, user)//sending to API is Okey
      .then(res => 
        setUsersState((prevState) => {
          return {
            ...prevState,
            users: [
              ...prevState.users,
              user,
            ],
          }
        })
      )
      .catch(error=> console.log(error))
    
  };

  //changes the addStatus, get value from Controls component -> add Button
  const addStatusToggle = (status) => {
    setAddStatus(status);
  };

  let deleteUser = (key) => {
    setUsersState((prevState) => {
      return {
        ...prevState,
        users: prevState.users.filter((item) => item.key !== key),
      };
    });
  };

  let editHandler = (user) => {
    let {key} = user;
    let {users} = usersState;
    let newUsers = users.filter(item => item.key !== key);

    setUsersState((prevState) => {
      return {
        ...prevState,
        users : [
          ...newUsers,
          user
        ]
      }
    })
  }


  let listShowToggle = (e) => {
    setUsersState((prevState) => {
      return {
        ...prevState,
        usersListStatus: !prevState.usersListStatus,
      };
    });
  };

  return (
    <main>
      <div className={addStatus ? "blur" : ""}>
        <Controls addStatus={addStatusToggle} listShowToggle={listShowToggle} />

        {usersState.usersListStatus ? (
          <ListShow state={usersState} delete={deleteUser} edit={editHandler} />
        ) : (
          ""
        )}
      </div>
      {addStatus ? <AddBox addStatus={addStatusToggle} add={addUser} /> : ""}
    </main>
  );
}

export default App;
