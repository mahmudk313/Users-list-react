import React from "react";
import './style/ListShow.css';

// Components
import Users from "./users";

function ListShow(props) {
    return (
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
                        props.users.length > 0
                            ? props.users.map(item => <Users
                                key={item.key}
                                usersList={item}
                                delete={props.delete}
                                edit={props.edit}
                            />)
                            : <tr><td>کاربری تعریف نشده است </td></tr>

                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListShow;