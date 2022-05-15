import React from "react";
import './ListShow.css';

// Components
import Users from "./Users";

function ListShow(props) {
    //satate defined in app.js component so we have access to it from the props
    let {state} = props;


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
                        state.users.length === 0 
                            ? <tr>کاربری تعریف نشده است</tr>
                            : state.users.map(item => <Users 
                                key={item.key} 
                                usersList={item} 
                                delete={props.delete} /> )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListShow;