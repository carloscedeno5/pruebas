import React from 'react';
import WeatherIcons from 'react-weathericons';

const getWeatherIcon = (weatherstate) =>{ //se pueden omitir los parentisis por se un valor 
    switch (weatherstate){
        case "cloud":
            return (<WeatherIcons name="cloud" size="2px"/>);
        default:
            return (<WeatherIcons name="sleet" size="2px"/>);
    }
};
const WeatherTemperatura = ({tempeture ,weatherstate}) => (
    <div>
        {getWeatherIcon(weatherstate)}
        <span>{`${tempeture} C°`}</span>
    </div>
);

export default WeatherTemperatura;