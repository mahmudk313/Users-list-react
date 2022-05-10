import { useState } from 'react';
import './AddBox.css';

//Components
import Input from './Input';

function AddBox(props) {

    const [userState, setUserState] = useState({user:{}})

    // users : {
    //     name : user.name,
    //     lastName : user.lastName,
    //     permission : user.permission,
    //     joinDate : user.joinDate,
    //     email : user.email,
    //     id : user.id,
    //     skill : user.skill,
    //     detail : user.detail
    //   }

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
                        
                            <label for="permission">دسترسی:</label><br/>
                            <input className="radio" type="radio" name="permission" id="admin" value="admin" />
                            <label for="admin">مدیر</label>
                            <input className="radio" type="radio" name="permission" id="user" value="user" />
                            <label for="user">کاربر</label>
                    </div>
                </form>
                    <button className="sub-btn" type="submit">ثبت</button>
            </div>
        </div>
    )

}

export default AddBox;