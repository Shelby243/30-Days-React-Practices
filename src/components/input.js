import React from 'react'
const Input=({type,id,onChange,value,name,placeholder,checked})=>{
    return(
        <div>
            <input 
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            checked={checked}
            
            />
        </div>
    )
}
export default Input