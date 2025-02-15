import dotenv from "dotenv";

dotenv.config();

exports.handler = async (event) => {
    try {
        const { city } = JSON.parse(event.body);
        if (!city) return { statusCode: 400, body: JSON.stringify({ error: "City is required" }) };

        const geoResponse = await fetch(`https://geocode.maps.co/search?q=${city}&api_key=${process.env.GEOCODER_API_KEY}`);
        const coordinates = await geoResponse.json();
        if (!coordinates.length) return { statusCode: 404, body: JSON.stringify({ error: "Invalid city" }) };

        const lat = coordinates[0]?.lat;
        const lon = coordinates[0]?.lon;

        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`);
        const weatherData = await weatherResponse.json();

        return {
            statusCode: 200,
            body: JSON.stringify(weatherData)
        };
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return { statusCode: 500, body: JSON.stringify({ error: "Failed to fetch weather data" }) };
    }
};
