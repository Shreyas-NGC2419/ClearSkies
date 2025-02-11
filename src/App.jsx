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
    const location = city;
    const response = await fetch(`https://geocode.maps.co/search?q=${location}&api_key=${import.meta.env.VITE_GEOCODER_API_KEY}`)
    const coordinates = await response.json()

    const lat = coordinates[0]?.lat || coordinates[1]?.lat;
    const lon = coordinates[0]?.lon || coordinates[1]?.lon;

    const weather_response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);

    const climate = await weather_response.json();

    console.log(climate);

    setWeatherData(climate)
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
