
export default function RadioInput({ onChange }) {

    const inputHandler = e => {
        if (e.target.checked === true)
            onChange(e)
    }

    return (
        <>
            <label htmlFor="permission">دسترسی:</label><br />
            <input className="radio" type="radio" name="permission" id="admin" value="admin" onChange={inputHandler} />
            <label htmlFor="admin">مدیر</label>
            <input className="radio" type="radio" name="permission" id="user" value="user" onChange={inputHandler} />
            <label htmlFor="user">کاربر</label>
        </>
    )
}