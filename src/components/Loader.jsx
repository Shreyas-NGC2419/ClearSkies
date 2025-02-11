import React from 'react'

const Loader = () => {
  return (
    <div id='climate-loader'>
        <i className="fa-solid fa-cloud" id="cloud1"></i>
        <div className="moon-cont">
        <i className="fa-solid fa-moon" style={{color: "#ffffff"}}></i>
        </div>
        <div className="sun-cont">
        <i className="fa-solid fa-sun" style={{color: "#FFD43B"}} id='sun'></i>
        </div>
        <i className="fa-solid fa-cloud" id='cloud2'></i>
    </div>
  )
}

export default Loader