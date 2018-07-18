import React from 'react';
import WeatherTemperatura from './WeatherTemperatura';
import WeatherExtrainfo from './WeatherExtrainfo';
import {CLOUD,
    CLOUDY,
    SUN,
    RAIN ,
    SNOW ,
    WINDY} from './../constans/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperatura tempeture={20} weatherstate={SNOW}/>   
        <WeatherExtrainfo humidity={80} wind={'10m/s'}/>
    </div>
);

export default WeatherData;