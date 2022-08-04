/* eslint-disable no-useless-constructor */
import React from 'react'
import Button from '../components/btn'
import {buttonStyles} from '../styles/button'
import Input from '../components/input'

class Main1 extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
       return(
        <main>
            <div className='main-wrapper'>
                <h3>Add Student</h3>
                <form onSubmit={this.props.handleSubmit} noValidate={this.props.validate}>
                    <div className='row'>
                        <div className='form-group'>
                            <label htmlFor='firstName'>First Name </label>
                            <Input
                            type='text'
                            name='firstName'
                            value={this.props.valfname}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            placeholder='First Name'
                            />

                        </div>
                        <div className='form-group'>
                        <label htmlFor='lastName'>Last Name </label>
                        <Input
                            type='text'
                            name='lastName'
                            value={this.props.vallsname}
                            onChange={this.props.handleChange}
                            placeholder='Last Name'
                            />
                        </div>
                        <div className='form-group'>
                        <label htmlFor='email'>Email </label>
                        <Input
                            type='email'
                            name='email'
                            value={this.props.valemail}
                            onChange={this.props.handleChange}
                            placeholder='Email'
                            />
                        </div>
                        <div className='form-group'>
                        <label htmlFor='tel'>Telephone </label>
                        <Input
                            type='tel'
                            name='tel'
                            value={this.props.valtel}
                            onChange={this.props.handleChange}
                            placeholder='Tel'
                            />
                        </div>
                        <div className='form-group'>
                        <label htmlFor='dateofBirth'>Date Of Birth </label>
                        <Input
                            type='date'
                            name='dateOfBirth'
                            value={this.props.valdate}
                            onChange={this.props.handleChange}
                            placeholder='Date Of Birth'
                            />
                        </div>
                        <div className='form-group'>
                        <label htmlFor='favoriteColor'>Favorite Color </label>
                        <Input
                            type='color'
                            id='color'
                            name='color'
                            value={this.props.valcolor}
                            onChange={this.props.handleChange}
                            placeholder='Favorite Color'
                            />
                        </div>
                        <div className='form-group'>
                        <label htmlFor='weight'>Weight </label>
                        <Input
                            type='number'
                            id='weight'
                            name='weight'
                            value={this.props.valweight}
                            onChange={this.props.handleChange}
                            placeholder='Weight in Kg'
                            />
                        </div>
                        <div >
                            <label htmlFor='country'>Country</label> <br />
                            <select name='country'  onChange={this.handleChange}  id='country'>
                            {this.props.selectedOptions}
                            
                            </select>
                        </div>
                        <div>
                            <p>Gender</p>
                            <div>
                                <Input
                                type='radio'
                                id='female'
                                name='gender'
                                value='Female'
                                onChange={this.props.handleChange}
                                checked={this.props.checked === 'Female'}
                                />
                                <label htmlFor='female'>Female</label>
                            </div>
                            <div>
                                <Input
                                type='radio'
                                id='male'
                                name='gender'
                                value='Male'
                                onChange={this.props.handleChange}
                                checked={this.props.checked === 'Male'}
                                />
                                <label htmlFor='male'>Male</label>
                            </div>
                            <div>
                                <Input
                                type='radio'
                                id='other'
                                name='gender'
                                value='Other'
                                onChange={this.props.handleChange}
                                checked={this.props.checked === 'Other'}
                                />
                                <label htmlFor='other'>Other</label>
                            </div>
                        </div>

                        <div>
                            <p>Select your skills</p>
                            <div>
                                <Input
                                type='checkbox'
                                id='html'
                                name='html'
                                onChange={this.props.handleChange}
                                />
                                <label htmlFor='html'>HTML</label>
                            </div>
                            <div>
                                <Input
                                    type='checkbox'
                                    id='css'
                                    name='css'
                                    onChange={this.handleChange}
                                />
                                <label htmlFor='css'>CSS</label>
                            </div>
                            <div>
                                <Input
                                type='checkbox'
                                id='javascript'
                                name='javascript'
                                onChange={this.props.handleChange}
                                />
                                <label htmlFor='javascript'>JavaScript</label>
                            </div>
                        </div>
                        <div>
                        <label htmlFor='bio'>Bio</label> <br />
                            <textarea
                            id='bio'
                            name='bio'
                            value={this.props.valbio}
                            onChange={this.props.handleChange}
                            cols='120'
                            rows='10'
                            placeholder='Write about yourself ...'
                            />
                        </div>
                        <div>
                            <Input
                            type='file'
                            name='file'
                            onChange={this.props.handleChange}
                            />
                        </div>
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
export default Main1