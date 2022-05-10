import { useState } from "react";
import "./Controls.css";

function Controls(props) {



    return (
        <div className="controls">
            <button type="button" className="add-btn sq-btn" onClick={() => props.addStatus(true)}></button>
            <button type="button" className="edit-btn sq-btn"></button>
            <button type="button" className="list-btn sq-btn"></button>
        </div>
    )
}

export default Controls;