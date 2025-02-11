import React, { useState } from 'react'

const WeatherForm = ({city,setCity}) => {

    const [cityValue,setCityValue] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        setCity(cityValue);
        document.getElementById('city').value = "";
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div id='searchbar-cont'>
            <label htmlFor="city">Search for your City:</label>
            <input type="text" name="city" id="city" placeholder='Your city here' onChange={(e)=>setCityValue(e.target.value)}/>
            <i className="fa-solid fa-magnifying-glass" style={{color: "#ededed"}} id='search-icon' onClick={handleSubmit}></i>
            </div>
            <button id='city-btn' type='submit'>Get Weather</button>
        </form>
    </div>
  )
}

export default WeatherForm