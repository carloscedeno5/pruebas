import React from 'react';

const WeatherExtrainfo = ({ humidity, wind}) => (
    <div>
        {/* template literarios creo xd */}
        <span>{`${humidity} % | `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

export default WeatherExtrainfo;
