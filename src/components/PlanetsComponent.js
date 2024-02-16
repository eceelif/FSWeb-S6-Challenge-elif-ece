

import React from "react";
const PlanetsComponent = ({ PlanetsData }) => {
  console.log('PlanetsData:', PlanetsData);

  // PlanetsData'nın varlığını ve results dizisinin varlığını kontrol et
  if (!PlanetsData || !PlanetsData.results || PlanetsData.results.length === 0) {
    return <div>No data available</div>; // veya istediğiniz bir hata mesajı
  }

  const planet = PlanetsData.results[0];
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
    residents,
    films
  } = planet;
    <div className="container">
      <div className="Name"> {name} </div>
      <div className="Rotation_Period"> {rotation_period}</div>
      <div className="Orbital_Period"> {orbital_period}</div>
      <div className="Diameter"> {diameter}</div>
      <div className="Climate"> {climate}</div>
      <div className="Gravity"> {gravity}</div>
      <div className="Terrain"> {terrain}</div>
      <div className="Surface_Water"> {surface_water}</div>
      <div className="Population"> {population}</div>

      <div className="Residents">
        <ul>
          {residents.length > 0 &&
            residents.map((item, index) => (
              <li key={index}>
                <a href={item}>{item}</a>
              </li>
            ))}
        </ul>
      </div>

      <div className="Films">
        <ul>
          {films.length > 0 &&
            films.map((item, index) => (
              <li key={index}>
                <a href={item}>{item}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  
};

export default PlanetsComponent;
