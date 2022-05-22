import { useState } from "react";
import "./AddBox.css";

//Components
import Input from "./Layout/Input";
import RadioInput from "./Layout/RadioInput";

function AddBox(props) {
    const [userState, setUserState] = useState({user:[]});

    // user : {
    //     name : user.name,
    //     lastName : user.lastName,
    //     permission : user.permission,
    //     joinDate : user.joinDate,
    //     email : user.email,
    //     id : user.id,
    //     skill : user.skill,
    //     detail : user.detail
    //   }


    //Handlers
    let inputHandler = (e) => {
        e.preventDefault();
        let [inputName, inputValue] = [e.target.name,e.target.value];
        
        setUserState(prevState => {
            return {
                user : {...prevState.user, 
                    [inputName] : inputValue
                }
            }
        });

        
    }
    //get name and value of input and add it to UserState
    
    let formHandler = (e) => {
        e.preventDefault();
        props.add(userState.user);
        props.addStatus(false);
        
        
    }

    return (
        <div className="wrap">
            <div className="add-box">
                <form onSubmit={formHandler}>
                    <div className="right-side">
                        <Input labelName="نام:" type="text" id="name" onChange={inputHandler} />
                        <Input labelName="تاریخ تولد:" type="text" id="birthDate" onChange={inputHandler} />
                        <Input labelName="کد ملی:" type="text" id="personalId" onChange={inputHandler} />
                    </div>

                    <div className="left-side">
                        <Input labelName="نام خانوادگی:" type="text" id="lastName" onChange={inputHandler} />
                        <Input labelName="ایمیل:" type="text" id="email" onChange={inputHandler} />
                        <Input labelName="مهارت:" type="text" id="skill" onChange={inputHandler} />

                        <RadioInput onChange={inputHandler} />
                    </div>
                    <button className="sub-btn" type="submit">ثبت</button>
                    <button className="exit-btn" type="button" onClick={() => props.addStatus(false)}>خروج</button>
                </form>
                
            </div>
        </div>
    )

}

export default AddBox;