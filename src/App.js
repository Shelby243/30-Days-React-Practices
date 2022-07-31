import React from 'react'
import { countriesData } from './data/countries'
import pic from  './images/picture2.jpeg'
import Header from './header/Header'
import Footer from './footer/Footer'
import Main from './main/Main'
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
       
       name:'',
       capital:'',
       
       population:'',
       flag:'',
       currency:'',
       count:0,
       styles:{
         backgroundColor:'',
         color:''
       },
       loggedIn:false,
       firstName:''
       
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
    countriesData.forEach((element)=>{
      this.setState({
        name:element.name,
        capital:element.capital,
        population:element.population,
        flag:element.flag,
        currency:element.currency,
      })
    })
    
     
       
   }
   handleChange=(e)=>{
    const value=e.target.value
    this.setState({firstName:value})
   }
     render(){
        const firstName=this.state.firstName
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
       if(this.state.loggedIn)
       {
        stile=this.state.styles
         texto='Back'
         
       }
       else{
        
         texto='Change Background'
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

           firstName={firstName}
           value={firstName}
           handleChange={this.handleChange}
           />
           
           <Footer style={stile}  date={new Date()}/>
         </div>
         
       )
     }
   }
   export default App