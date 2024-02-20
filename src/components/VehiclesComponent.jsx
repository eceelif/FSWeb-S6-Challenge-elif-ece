import React from "react";
// "vehicles": "https://swapi.dev/api/vehicles/"

const VehiclesComponent = (props) => {
    const { VehiclesData } = props;
    
    const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, 
      passengers, vehicles, cargo_capacity, consumables, vehicle_class, films} = VehiclesData;
  
    return (
      <div className="container">
        <div className="Name"> {name} </div>
        <div className="Model"> {model}</div>
        <div className="Manufacturer"> {manufacturer}</div>
        <div className="Cost_In_Credits"> {cost_in_credits}</div>
        <div className="Length"> {length}</div>
        <div className="Max_Atmosphering_Speed"> {max_atmosphering_speed}</div>
        <div className="Crew"> {crew}</div>
        <div className="Passengers"> {passengers}</div>
        <div className="Vehicles"> {vehicles}</div>
        <div className="Cargo_Capacity"> {cargo_capacity}</div>
        <div className="Consumables"> {consumables}</div>
        <div className="Vehicle_Class"> {vehicle_class}</div>
        
  
              
        <div className="UrlsFilms">
          <ul>
          {
              films.length > 0 &&
              films.map((item, index) => (
              <li key={index}>
                <a href={item}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
  
      </div>
    );
  };
  
  
  export default VehiclesComponent;