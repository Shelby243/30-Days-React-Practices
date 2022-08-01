import Input from '../components/input'
import Button from '../components/btn'
const Form=({value,onChange,lastName,title,country,onSubmit,txt,style})=>{
    <div>
        <form onSubmit={onSubmit} >
            <div>
            <Input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={value}
            onChange={onChange}
            />
            </div>
            
            <div>
            <Input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={onChange}
            />

            </div>

            <div>
            <Input
            type='text'
            name='country'
            placeholder='Country'
            value={country}
            onChange={onChange}
            />
            </div>

            <div>
            <Input
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            onChange={onChange}
            />
            </div>
            <Button
            text={txt}
            style={style}
            
            />
        </form>
    </div>
}
export default Form