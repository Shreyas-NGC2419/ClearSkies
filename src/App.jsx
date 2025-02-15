import { useEffect, useState } from 'react';
import WeatherForm from './components/WeatherForm';
import { WeatherDisplay } from './components/WeatherDisplay';
import Loader from './components/Loader';
import './animations.css';
import './maindisplay.css';

function App() {

  const [city, setCity] = useState("");
  const [weatherData,setWeatherData] = useState(null);

  async function getWeatherData() {
    if (!city) return;

    try {
      const response = await fetch("/.netlify/functions/weather-server", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city }),
    });    

        const data = await response.json();
        setWeatherData(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    if (city){
      setWeatherData(null);
      getWeatherData();
    }
  }, [city])


  return (
    <>
      <WeatherForm city={city} setCity={setCity} />
      {city && !weatherData && <Loader/>}
      {weatherData && <WeatherDisplay data={weatherData}/>}
    </>
  )
}

export default App
