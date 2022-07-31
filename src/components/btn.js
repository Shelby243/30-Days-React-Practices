const Button=({text,style,onClick})=>{
   return(
    <div>
        <button style={style} onClick={onClick}>
            {text}
        </button>
    </div>
   ) 
}
export default Button