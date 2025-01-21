import React from "react";

const Input = ({type, name, id, placeholder,className}) => {
  return (
    <input type={type} name={name} id={id} placeholder={placeholder} className={className}/>
  )
}

export default Input;