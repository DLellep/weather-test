import { useState } from 'react';
import './WeatherApplication.css';

import { createMockServer } from '../mock/createMockServer';
import Search from './Search'
import WeatherCard from './WeatherCard';

if (process.env.NODE_ENV === 'development') {
    createMockServer();
}

const WeatherApplication = () => {
    const [selected, setSelected] = useState([])

    const selectCity = (city) => {
        setSelected([city, ...selected])
    }

    return (
        <div className="App">
            <h1>Weather Application</h1>
            <Search onSelectItem={selectCity} />

            <div data-testid="my-weather-list" className="cities-container">
                {selected && selected.map((city) => <WeatherCard key={`${city.lat}-${city.lon}`} city={city} />)}
            </div>
        </div>
    );
}

export default WeatherApplication;