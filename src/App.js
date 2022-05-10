import { useState } from 'react';

import './App.css';

//import components
import Controls from './Components/Controls';
import ListShow from './Components/ListShow';

function App() {

  const [addStatus, setAddStatus] = useState(false);
  const [state, setState] = useState({
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


  return (
    <main> 
      <ListShow state={state} />
      {
    </main>
  );
}

export default App;
