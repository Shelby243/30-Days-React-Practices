/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App3 from './App3'

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







const rootElement=document.getElementById("root")
ReactDOM.render(<BrowserRouter>
                  <App3/>
                </BrowserRouter>,rootElement)