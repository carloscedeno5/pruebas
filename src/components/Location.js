import React from 'react';

const Location = ({city}) => (//destructuring
    // const { city }= props; //pasar la propiedad city= props.city destructuring
    <div>
        <h1>
        {city}         
        </h1>
    </div>
);
export default Location;