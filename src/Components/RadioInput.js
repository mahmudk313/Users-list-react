import { useState } from "react"


export default function RadioInput (props) {

    const inputHandler = e => {
        if (e.target.checked === true)
            props.onChange(e)
    }

    
    return (
        <>
            <label for="permission">دسترسی:</label><br/>
            <input className="radio" type="radio" name="permission" id="admin" value="admin" onChange={inputHandler}/>
            <label for="admin">مدیر</label>
            <input className="radio" type="radio" name="permission" id="user" value="user"  onChange={inputHandler}/>
            <label for="user">کاربر</label>
        </>
    )
}