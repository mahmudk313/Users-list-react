
export default function formInput({ labelName, id, type, onChange, defaultValue }) {
    return (
        <>
            <label >{labelName}</label><br />
            <input className="form-input" type={type} name={id} id={id} onChange={onChange} defaultValue={defaultValue} /><br />
        </>
    )
}