function Input(props) {

    let {labelName, id, type} = props;

    
    return(
        <>
            <label >{labelName}</label><br/>
            <input className="form-input" type={type} name={id} id={id} onChange={props.onChange} /><br/>
        </>
    )
}

export default Input;