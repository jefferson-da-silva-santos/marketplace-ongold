import React from "react";

const GroupInput = ({classIcon, onClick, type, name, id, placeholder, onChange}) => {
  return (
    <div className="group-input">
      <a href="" className="group-input__icon" onClick={onClick}>
      <i className={`bi ${classIcon}`}></i>
      </a>
      <input className="group-input__input" type={type} name={name} id={id} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default GroupInput;
// bi-envelope-fill