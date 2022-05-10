import React, {useState} from "react";
import './ListShow.css';

// Components
import Users from "./Users";

function ListShow() {

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


    return(
        <div className="list-show">
            <table>
                <tbody>
                    <tr>
                        <th>نام</th>
                        <th>نام خانوادگی</th>
                        <th>دسترسی</th>
                        <th>تاریخ عضویت</th>
                        <th>ایمیل</th>
                        <th>شناسه</th>
                        <th>مهارت</th>
                        <th>توضیحات</th>
                    </tr>
                    
                    {
                        state.users.length === 0 
                            ? <h2>کاربری اضافه نشده است!</h2>
                            : state.users.map(item => <Users key={item.id} usersList={item} /> )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListShow;