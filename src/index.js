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
      <header>
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
            text='Change BackGround'
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

        </div>
      </main>
    )
  }
}
class Footer extends React.Component{
  state={
    count:0,
    styles:{
      backgroundColor:'',
      color:''
    }
  }
  constructor(props){
    super(props)
  }
  render(){
    return(
      <footer>
        <div style={this.state.styles}  className='footer-wrapper'>
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
    }
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
  this.setState({styles:this.setState.styles={backgroundColor:'#2233a3',color:''}})
  console.log(5)
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
    return(
      
      < div  style={this.state.styles} className='app'>
       
        <Header  data={data}/>
        <Main 
        style={this.state.styles}
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
        />
        <Footer style={this.state.styles} date={new Date()}/>
      </div>
      
    )
  }
}
const rootElement=document.getElementById("root")
ReactDOM.render(<App/>,rootElement)