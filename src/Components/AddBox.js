import { useState } from 'react';
import './AddBox.css';

//Components
import Input from './Input';
import RadioInput from './RadioInput';

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
                        <Input labelName="کد ملی:" type="text" id="id" onChange={inputHandler} />
                        {/* <label for="f-name">نام:</label><br/>
                        <input className="form-input" type="text" name="fname" id="f-name" onChange={nameHandler} /><br/>
                        <label for="b-date">تاریخ تولد:</label><br/>
                        <input className="form-input" type="text" name="b-date" id="b-date" /><br/>
                        <label for="id">کد ملی:</label><br/>
                        <input className="form-input" type="number" name="id" id="id" /><br/> */}
                        
                    </div>

                    <div className="left-side">
                        <Input labelName="نام خانوادگی:" type="text" id="lastName" onChange={inputHandler} />
                        <Input labelName="ایمیل:" type="text" id="email" onChange={inputHandler} />
                        <Input labelName="مهارت:" type="text" id="skill" onChange={inputHandler} />

                        {/* <label for="l-name">نام خانوادگی:</label><br/>
                        <input className="form-input" type="text" name="l-name" id="l-name" /><br/>
                        <label for="email">ایمیل:</label><br/>
                        <input className="form-input" type="text" name="email" id="email" /><br/>
                        <label for="skill">مهارت:</label><br/>
                        <input className="form-input" type="text" name="skill" id="skill" /><br/> */}
                        
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