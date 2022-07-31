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
             <label htmlFor='firstName'>FirstName: </label>
             <Input 
             value={this.props.value}
             onChange={this.props.handleChange}
             />
             <h2>{this.props.firstName}</h2>
            
          </div>
        </main>
      )
    }
  }

  export default Main