import React from 'react'
const Input=({onChange,value1,name,placeholder})=>{
    return(
        <div>
            <input 
            type='text'
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            
            />
        </div>
    )
}
export default Input