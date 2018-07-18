import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD,
        CLOUDY,
        SUN,
        RAIN ,
        SNOW ,
        WINDY} from './../constans/weathers';

const stateiconname = (weatherstate) =>{ //se pueden omitir los parentisis por se un valor 
    switch (weatherstate){
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        default:
            return "day-sunny";
    }
};
const getWeatherIcon = weatherstate => {
    return (<WeatherIcons name={stateiconname(weatherstate)} size="2px"/>);
}
const WeatherTemperatura = ({tempeture ,weatherstate}) => (
    <div>
        {getWeatherIcon(weatherstate)}
        <span>{`${tempeture} C°`}</span>
    </div>
);

export default WeatherTemperatura;