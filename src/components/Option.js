import React from "react";
const Option = (props) => {
    return (
        <div>
        {props.optiontext}
        <button 
        onClick={(e) => {
            props.handleDeleteOption(props.optiontext);
        }}
        
        >remove</button>
        </div>
        // sends the button to the Option component which is rendered in options
    );
};


export default Option;