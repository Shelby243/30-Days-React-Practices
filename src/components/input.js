const Input=({value,onChange})=>{
    return(
        <div>
            <input 
            type='text'
            id='firstName'
            placeholder="First Name"
            name="firstName"
            value={value}
            onChange={onChange}
            
            />
        </div>
    )
}
export default Input