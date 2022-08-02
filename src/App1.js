import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

import Main1 from './main/Main1'

const options = [
    {
      value: '',
      label: '-- Select Country--',
    },
    {
      value: 'Finland',
      label: 'Finland',
    },
    {
      value: 'Sweden',
      label: 'Sweden',
    },
    {
      value: 'Norway',
      label: 'Norway',
    },
    {
      value: 'Denmark',
      label: 'Denmark',
    },
  ]

  const selectedOptions=options.map(({value,label})=>(
    <option value={value}>{label}</option>
  ))
class App1 extends React.Component{
    
     state={
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        tel: '',
        dateOfBirth: '',
        favoriteColor: '',
        weight: '',
        gender: '',
        file: '',
        bio: '',
        skills: {
        html: false,
        css: false,
        javascript: false,
        },
     }

     handleChange=(e)=>{

        const {name,value,type,checked}=e.target

        if(type === 'checkbox'){
            this.setState({
                skills:{...this.state.skills,[name]:checked}
            })
        } else if(type === 'file'){
            console.log(type,'check here')
            this.setState({[name]:e.target.file[0]})
        } else{
            this.setState({[name]:value})
        }
     }
     handleSubmit=(e)=>{
        e.preventDefault()
        const {
            firstName,
            lastName,
            email,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            country,
            gender,
            bio,
            file,
            skills,
        }=this.state

        const formattedSkills=[]
        for(const key in skills){
            console.log(key)
            if(skills[key]){
                formattedSkills.push(key.toUpperCase())
            }
        }
        const data={
            firstName,
            lastName,
            email,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            country,
            gender,
            bio,
            file,
            skills: formattedSkills,
        }
        console.log(data)
     }
     render(){

        const {
            firstName,
            lastName,
            email,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            country,
            gender,
            bio,
          } = this.state

        const data={
            welcome: 'Welcome to 30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
              fName: 'Jérémie',
              ltName: 'Lowe',
            },
            date: 'Oct 7, 2020'
          }
        return(
            <div className='App'>
                <Header data={data}/>
                <Main1
                
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                valfname={firstName}
                vallsname={lastName}
                valemail={email}
                valtel={tel}
                valdate={dateOfBirth}
                valcolor={favoriteColor}
                valweight={weight}
                selectedOptions={selectedOptions}
                checked={gender}
                valbio={bio}
                country={country}
                
                />
                <Footer date={new Date()}/>

            </div>
        )
     }
       
         
     }
   
   export default App1