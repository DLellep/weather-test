import { useEffect, useState } from "react";
import './WeatherCard.css';

const WeatherCard = ({ city }) => {
    const [weather, setWeather] = useState()

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.name}`)
            .then((result) => {
                return result.json()
            })
            .then((data) => {
                setWeather({
                    temperature: data.main.temp,
                    main: data.weather[0].main
                })
            })
    }, [city])
    return (
        <div className={`weather-container ${weather && weather.main.toLowerCase()}`}>
            <h3>{city.name}</h3>
            <p>{weather ? `${weather.temperature}°` : '-/-'}</p>
            <p>{weather && weather.main}</p>
        </div>
    );
}

export default WeatherCard;