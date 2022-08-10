/* eslint-disable react/require-render-return */
import React from 'react'

import axios from 'axios'
import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
    TiSocialTwitterCircular,
} from 'react-icons/ti'


class App2 extends React.Component {
    state={
        data:[],
    }
componentDidMount(){
    const API_URL='https://api.countrylayer.com/v2/all'
    axios
    .get(API_URL)
    .then((response)=>{
        this.setState({
            data:response.data,
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}
renderCountries=()=>{
    return this.state.data.map((country)=>{
        const languageOrLanguages=
        country.languages.length >1?'Languages':'Language'
        const formatLanguages=country.languages
        .map(({name})=>name)
        .join(', ')
        return(
            <div>
                <div>
                    {' '}
                    <img src={country.flag} alt={country.name} />{' '}
                </div>
                <div>
                <h1>{country.name}</h1>
                    <p>Capital: {country.capital}</p>
                    <p>
                    {languageOrLanguages}: {formatLanguages}
                    </p>
                    <p>Population: {country.population}</p>
                </div>
            </div>
        )
    })

}
    render(){
        return (
            <div className='App'>
                <h1>Welcome to the World Of Icons</h1>
                <h3>30 Days Of React </h3>
                <div className=''>
                    <TiSocialGithubCircular/>
                    <TiSocialLinkedinCircular/>
                    <TiSocialTwitterCircular/>
                </div>
                <div>
                    <small>Copyright &copy;{new Date().getFullYear}</small>
                </div>
             </div>
        )
        
    }
}
export default App2