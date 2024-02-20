import React from "react";

const SpeciesComponent = (props) => {
  const {SpeciesData } = props;
  const { name, classification, designation , average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language, people, films} = SpeciesData;
  return (
    <div className="container">
    <div className="Name"> {name} </div>
    <div className="Classification"> {classification}</div>
    <div className="Designation"> {designation}</div>
    <div className="Average_Height"> {average_height}</div>
    <div className="Skin_Colors"> {skin_colors}</div>
    <div className="Hair_Colors"> {hair_colors}</div>
    <div className="Eye_Colors"> {eye_colors}</div>
    <div className="Average_Lifespan"> {average_lifespan}</div>
    <div className="Homeworld"> {homeworld}</div>
    <div className="Language"> {language}</div>

    <div className="People">
        <ul>
        {
            people.length > 0 &&
            people.map((item, index) => (
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
export default SpeciesComponent;