import React from "react";
import './button.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const BartuButton = styled(Button)`
  width: 100%;
  background-color: black;
  &:hover {
    background-color: blue;
  }
  &:focus {
    background-color: green;
  }
  `;

const ButtonComponent = ({buttonName}) => {

    return (
      // <div>
      // <button className="button">
      //   {buttonName}
      // </button>
      // </div>
      <div className="button-container">
      <BartuButton variant="contained">{buttonName}</BartuButton>
      </div>      
    )
}
export default ButtonComponent


