import React from "react";

export default function Fields(Props) {
  const {title,name,placeholder,handler,type} = Props
  return (
    <div className="fields">
      <label>{title}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handler}
      />
    </div>
  );
}
