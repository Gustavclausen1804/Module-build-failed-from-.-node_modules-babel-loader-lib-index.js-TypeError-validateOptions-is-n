import React from "react";
import Option from "./Option";

const Options = (props) => {
    return (
            <div>
            <button onClick={props.handleDeleteOptions}>Remove all!</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
              {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optiontext={option}
                        handleDeleteOption={props.handleDeleteOption} //takes the prop from option component
                        />
                ))
            }
            </div>

    );
};

export default Options;