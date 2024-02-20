import React from "react";

const StarshipsComponent = (props) => {
  const {StarshipsData } = props;
  const { name, model, manufacturer , cost_in_credits, length,max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class, pilots, films} = StarshipsData;
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
    <div className="Cargo_Capacity"> {cargo_capacity}</div>
    <div className="Consumables"> {consumables}</div>
    <div className="Hyperdrive_Rating"> {hyperdrive_rating}</div>
    <div className="MGLTClassname"> {MGLT}</div>
    <div className="Starship_Class"> {starship_class}</div>


    <div className="pilots">
        <ul>
        {
            pilots.length > 0 &&
            pilots.map((item, index) => (
                <li key={index}>
                <a href={item}>{item}</a>
                </li>
            ))
        }
        </ul>
      </div>
      
      <div className="Films">
        <ul>
        {
            films.length > 0 &&
            films.map((item, index) => (
                <li key={index}>
                <a href={item}>{item}</a>
                </li>
            ))
        }
        </ul>
      </div>

    </div>

  )
}
export default StarshipsComponent;