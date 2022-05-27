import React from "react";
import './button.css';


const ButtonComponent = (props) => {

    return (
      <div>
      <button className="button">
        {props.buttonName}
      </button>
      </div>
    )
}

export default ButtonComponent