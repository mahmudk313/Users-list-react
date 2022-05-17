import { useEffect, useState } from 'react';
import './style/AddBox.css';

//Components
import Input from './fields/formInput';
import RadioInput from './fields/radioInput';

function AddBox(props) {
    const [userState, setUserState] = useState(
        {
            //key: '',
            //joinDate:''
            name: '',
            lastName: '',
            permission: '',
            email: '',
            id: '',
            skill: '',
            birthDate: ''
        });


    useEffect(() => {
        if (props.editUser !== null) {
            setUserState(props.editUser)
        }
    }, [props.editUser])



    //Handlers
    const inputHandler = (e) => {
        e.preventDefault();
        //get name and value of input and add it to UserState
        const [key, value] = [e.target.name, e.target.value];
        setUserState({ ...userState, [key]: value })
    }

    const close = () => {
        props.addStatus(false);
        props.setEditUser(null);
    }

    const formHandler = (e) => {
        e.preventDefault();
        props.add(userState);
        close()
    }

    return (
        <div className="wrap">
            <div className="add-box">
                <form onSubmit={formHandler}>
                    <div className="right-side">
                        <Input labelName="نام:" type="text" id="name" onChange={inputHandler} defaultValue={props.editUser?.name || ""} />
                        <Input labelName="تاریخ تولد:" type="text" id="birthDate" onChange={inputHandler} defaultValue={props.editUser?.birthDate || ""} />
                        <Input labelName="کد ملی:" type="text" id="id" onChange={inputHandler} defaultValue={props.editUser?.id || ""} />
                    </div>

                    <div className="left-side">
                        <Input labelName="نام خانوادگی:" type="text" id="lastName" onChange={inputHandler} defaultValue={props.editUser?.lastName || ""} />
                        <Input labelName="ایمیل:" type="text" id="email" onChange={inputHandler} defaultValue={props.editUser?.email || ""} />
                        <Input labelName="مهارت:" type="text" id="skill" onChange={inputHandler} defaultValue={props.editUser?.skill || ""} />
                        <RadioInput onChange={inputHandler} />
                    </div>
                    <button className="sub-btn" type="submit">ثبت</button>
                    <button className="exit-btn" type="button" onClick={close}>خروج</button>
                </form>

            </div>
        </div>
    )

}

export default AddBox;