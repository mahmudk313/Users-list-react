function Input(props) {

    let {labelName, id, type, edit} = props;
    if (edit === undefined)
        edit = false;
    
    return(
        <>
            {
                ! edit
                    ? (
                        //inputs for adding users
                        <>
                            <label >{labelName}</label><br/>
                            <input className="form-input" type={type} name={id} id={id} onChange={props.onChange} /><br/>
                        </>
                    )
                    : (
                        //inputs for editing users
                        <>
                            <input style={{width:"120px"}} value={props.value} type={type} name={id} id={id} onChange={props.onChange} />
                        </>
                    )
            }
        </>
    )
}

export default Input;