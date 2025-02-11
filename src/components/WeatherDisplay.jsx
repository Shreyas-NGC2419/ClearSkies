export function WeatherDisplay({ data }) {
    if (!data) return null;

    const weatherMain = data.weather?.[0]?.main || "";
    const weatherImage = `/images/${weatherMain}.jpeg`;

    return (
        <div className="main-container">
            <div className="img-container">
                <img src={weatherImage} alt="weather_img" />
            </div>
            <div className="data-container">
                <h2 style={{fontSize:"xxx-large"}}>{data.name ? `${data.name}, ${data.sys?.country || ""}` : ""}</h2>
                <div className="main-info-section">
                    <div className="info-container">
                        <div className="temp-container">
                            <h1>{data.main?.temp !== undefined ? `${data.main.temp}°C` : ""}</h1>
                            <h4>Feels like: {data.main?.feels_like !== undefined ? `${data.main.feels_like}°C` : ""}</h4>
                        </div>
                        <h2>{data.weather?.[0]?.description || ""}</h2>
                    </div>
                    <div className="info-grid">
                        <h4>Min. Temperature: {data.main?.temp_min !== undefined ? `${data.main.temp_min}°C` : ""}</h4>
                        <h4>Max. Temperature: {data.main?.temp_max !== undefined ? `${data.main.temp_max}°C` : ""}</h4>
                        <h4>Humidity: {data.main?.humidity !== undefined ? `${data.main.humidity}%` : ""}</h4>
                        <h4>Wind Speed: {data.wind?.speed !== undefined ? `${data.wind.speed} km/h` : ""}</h4>
                        <h4>Pressure: {data.main?.pressure !== undefined ? `${data.main.pressure} hpa` : ""}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}