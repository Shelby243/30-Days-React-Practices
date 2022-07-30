/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react'
import ReactDOM from 'react-dom'
import pic from  './images/picture2.jpeg'
import { countriesData } from './data/countries'
/*const UserCard=({text})=>(
  <div className='user-card' >
    <Img/>
    <h2>{text}</h2>
    
  </div>
)
const Img=()=>(
  <div>
    <img src={pic} alt=''/>
  </div>
  
)*/
const Country=({name,capital,flag,population,currency})=>{
  return(
    <div className='user-card' >
      <img src={flag} alt={name}/>
      <h2>{name}</h2>
      <h3><b>Capital:</b>{capital}</h3>
      <h3><b>Population:</b>{population}</h3>
      <h3><b>Currency:</b>{currency}</h3>

    </div>
  )
}
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
/*class TechList extends React.Component{
  render(){
    const {techs}=this.props
    const techsFormatted=techs.map((tech)=><li key={tech}>{tech}</li>)
    return techsFormatted
  }
}*/
class Main extends React.Component{
  constructor(props){
    super(props)
  }
  render(){

    return(

      <main>
        <div className='main-wrapper'>
          
          
          <Country 
          name={this.props.name}
          capital={this.props.capital}
          population={this.props.population}
          flag={this.props.flag}
          currency={this.props.currency}
          />
          </div>
          <div>
           <Button
           text={this.props.texto}
           style={buttonStyles}
           onClick={this.props.changeBackground}
           />
           <Button
           text='Select Country'
           style={buttonStyles}
           onClick={this.props.handleSelect}
           />
           <Button
           text='Add One'
           style={buttonStyles}
           onClick={this.props.addOne}
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
 /* state={
    count:0,
    styles:{
      backgroundColor:'',
      color:''
    },
    loggedIn:false
  }*/
 state={
    
    name:countriesData[0].name,
    capital:countriesData[0].capital,
    
    population:countriesData[0].population,
    flag:countriesData[0].flag,
    currency:countriesData[0].currency,
    count:0,
    styles:{
      backgroundColor:'',
      color:''
    },
    loggedIn:false
    
  }
  
  addOne=()=>{
    this.setState({count:this.state.count + 1})
    
  }
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
  this.setState({
    styles:this.setState.styles={backgroundColor:'#1f2244'},
    loggedIn:!this.state.loggedIn
  })
  console.log(this.addOne())
}
handleLogin=()=>{
  this.setState({loggedIn:!this.state.loggedIn})
}
handleSelect=()=>{
  
  
    this.setState({
      name:this.setState={name:countriesData[1].name},
      capital:this.setState={capital:countriesData[1].capital},
      population:this.setState={capital:countriesData[1].population},
      flag:this.setState={flag:countriesData[1].flag},
      currency:this.setState={currency:countriesData[1].currency},
    })
  
  
}
  render(){
    const count1=this.state.count
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
    
    const log=this.state.loggedIn
   /* let status=this.state.loggedIn?(<h1>Welcome To 30 Days Of React</h1>):(<h3>Please Login</h3>)
    let text=this.state.loggedIn?('Logout'):('Login')*/
    // eslint-disable-next-line no-undef, no-global-assign
    
    let texto
    let stile
    if(this.state.loggedIn && this.state.styles)
    {
      stile=this.state.styles
      texto='Back'
      
    }
    else{
      stile=this.state.styles
      texto='Change BackGround'
    }
  const name=this.state.name
  const capital=this.state.capital
  const population=this.state.population
  const flag=this.state.flag
  const currency=this.state.currency
    return(
      
      < div style={stile}  className='app'>
       
        <Header style={stile}  data={data}/>
      
        <Main 
       
        name={name}
        capital={capital}
        population={population}
        flag={flag}
        currency={currency}


        count1={count1}
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
        handleSelect={this.handleSelect}
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