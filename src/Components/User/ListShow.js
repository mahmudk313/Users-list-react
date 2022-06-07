import React from "react";
import "./ListShow.css";
import { useSelector } from "react-redux";
// Components
import Users from "./Users";

function ListShow(props) {
    //state defined in app.js component so we have access to it from the props
    // let {state} = props;
    const users = useSelector((state) => state.users.users)
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
                        <th>ابزار</th>
                    </tr>
                    {/* if there are no users a message will be displayed otherwise Users component called */}
                    {
                        users.length === 0 
                            ? <tr>کاربری تعریف نشده است</tr>
                            : users.map(item => <Users 
                                key={item.key} 
                                user={item} 
                                delete={props.delete}
                                /> )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListShow;