import React from 'react';

const WeatherExtrainfo = ({ humidity, wind}) => (
    <div>
        {/* template script creo xd */}
        <span>{`${humidity} % | `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

export default WeatherExtrainfo;
