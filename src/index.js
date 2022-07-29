/* eslint-disable no-useless-constructor */
import React from 'react'
import ReactDOM from 'react-dom'
import pic from './images/picture2.jpeg'
const UserCard=({count,user:{firstName,lastName,image}})=>(
  <div className='user-card'>
    <img src={image} alt={firstName}/>
    <h2>{firstName} {lastName}</h2>
    <h3>Followers: {count}</h3>
  </div>
)
const Button=({text,onClick,style})=>(
  <button style={style} onClick={onClick}>{text}</button>
)
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',

}
class Header extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    const {
      welcome,
      title,
      subtitle,
      author:{firstName,lastName},
      date
    }=this.props.data
    return(
      <header style={this.props.style}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{firstName} {lastName}</p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}
class TechList extends React.Component{
  render(){
    const {techs}=this.props
    const techsFormatted=techs.map((tech)=><li key={tech}>{tech}</li>)
    return techsFormatted
  }
}
class Main extends React.Component{
  constructor(props){
    super(props)
  }
  render(){

    return(

      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get Started react.js:</p>
          <ul>
            <TechList techs={this.props.techs}/>
          </ul>
          <UserCard 
            user={this.props.user}
            count={this.props.count}
          />
          <Button 
          text='Greet People'
          onClick={this.props.greetPeople}
          style={buttonStyles}
          />
          <Button
            text='Show Time'
            onClick={this.props.handleTime}
            style={buttonStyles}
          />
          <Button
            text={this.props.texto}
            onClick={this.props.changeBackground}
            style={buttonStyles}
          />
          <Button
             text={this.props.txt1}
             style={buttonStyles}
             onClick={this.props.addOne}
           />
           <Button
             text={this.props.txt2}
             style={buttonStyles}
             onClick={this.props.minusOne}
           />
           <Button
           text={this.props.text}
           style={buttonStyles}
           onClick={this.props.handleLogin}
           />

        </div>
      </main>
    )
  }
}
class Footer extends React.Component{
  
  constructor(props){
    super(props)
  }
  render(){
    return(
      <footer style={this.props.style}>
        <div  className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}
class App extends React.Component{
  state={
    count:0,
    styles:{
      backgroundColor:'',
      color:''
    },
    loggedIn:false
  }
  addOne=()=>this.setState({count:this.state.count + 1})
  minusOne=()=>this.setState({count:this.state.count - 1})
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
changeBackground=()=>{  
  this.setState({styles:this.setState.styles={backgroundColor:'#1f2244'}})
  console.log(5)
}
handleLogin=()=>{
  this.setState({loggedIn:!this.state.loggedIn})
}
  render(){
    const count=this.state.count
    const txt1='Add One'
    const txt2='Minus One'
    const data={
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Jérémie',
        lastName: 'Lowe',
      },
      date: 'Oct 7, 2020'
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const user={...data.author, image:pic}
    const stile=this.state.styles
    const log=this.state.loggedIn
    let status=this.state.loggedIn?(<h1>Welcome To 30 Days Of React</h1>):(<h3>Please Login</h3>)
    let text=this.state.loggedIn?('Logout'):('Login')
    let texto
    
    if(this.state.styles.backgroundColor==='')
    {
      texto='Change BackGround'
    }
    else{
      
      texto='Back'
    }
    return(
      
      < div style={stile}  className='app'>
       
        <Header style={stile}  data={data}/>
        {status}
        <Main 
        
        count={count}
        txt1={txt1}
        txt2={txt2}
        user={user}
        techs={techs}
        handleTime={this.handleTime}
        greetPeople={this.greetPeople}
        addOne={this.addOne}
        minusOne={this.minusOne}
        changeBackground={this.changeBackground}
        handleLogin={this.handleLogin}
        text={text}
        texto={texto}
        log={log}
        />
        <Footer style={stile}  date={new Date()}/>
      </div>
      
    )
  }
}
const rootElement=document.getElementById("root")
ReactDOM.render(<App/>,rootElement)