/* eslint-disable no-useless-constructor */
import React from 'react'
import Country from '../components/country'
import Button from '../components/btn'
import {buttonStyles} from '../styles/button'
import Input from '../components/input'


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
            
             <h3>Add Student</h3>
             <form onSubmit={this.props.handleSubmit} onChange={this.props.handleChange}>
             <div>
            <Input
            type='text'
            name='firstName'
            placeholder='First Name'
            value1={this.props.firstName}
            onChange={this.handleChange}
            />
            </div>
            
            <div>
            <Input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value1={this.props.lastName}
            onChange={this.handleChange}
            />

            </div>

            <div>
            <Input
            type='text'
            name='country'
            placeholder='Country'
            value1={this.props.country}
            onChange={this.handleChange}
            />
            </div>

            <div>
            <Input
            type='text'
            name='title'
            placeholder='Title'
            value1={this.props.title}
            onChange={this.handleChange}
            />
            </div>
            <div>
            <Button
            text='Submit'
            style={buttonStyles}
            />
            </div>
            
             </form>
             
             
            
          </div>
        </main>
      )
    }
  }

  export default Main