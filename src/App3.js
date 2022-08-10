import React, {Component} from 'react'
import { Routes, Route, NavLink} from 'react-router-dom'

const Home=(props)=><h1> Welcome Home</h1>
const About=(props)=><h1>About Us</h1>
const Contact=(props)=><h1> Contact Us</h1>
const Challenges=(props)=>(
    <div>
        <h1>30 Days React Challenges</h1>
    </div>
)


class App3 extends Component{
    render(){
        return (
            <div className='App'>
                <ul>
                  <li> <NavLink to='/'>Home</NavLink></li>  
                  <li> <NavLink to='/about'>About</NavLink></li> 
                  <li> <NavLink to='/contact'>Contact</NavLink></li>
                  <li> <NavLink to='/challenges'>Challenges</NavLink></li>
                  

                </ul>
            <Routes>
                
                  <Route path="/about"  element={< About/>}/>
                  <Route path="/contact"  element={<Contact />}/>
                  <Route path="/challenges" element={<Challenges/>}/>
                  <Route path='/' element={<Home/>}/>
                
            </Routes>
            </div>
        )
    }
}

export default App3