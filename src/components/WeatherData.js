import React from 'react';
import WeatherTemperatura from './WeatherTemperatura';
import WeatherExtrainfo from './WeatherExtrainfo';

const WeatherData = () => (
    <div>
        <WeatherTemperatura tempeture={20} weatherstate={"cloud"}/>
        <WeatherExtrainfo humidity={80} wind={'10m/s'}/>
    </div>
);

export default WeatherData;