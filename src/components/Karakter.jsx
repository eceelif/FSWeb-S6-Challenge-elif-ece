//fetch data'dan şu sonuç gelecek:

/* {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
}, */

import React from "react";

const CharacterComponent = (props) => {
  const { CharacterData } = props;
  
  const { name, height, mass, hair_color, eye_color, skin_color, birth_year, gender, homeworld, films} = CharacterData;
  
  return (
    <div className="container">
      <div className="Name"> {name} </div>
      <div className="Height"> {height}</div>
      <div className="Mass"> {mass}</div>
      <div className="Hair_Color"> {hair_color}</div>
      <div className="Skin_Color"> {skin_color}</div>
      <div className="Eye_Color"> {eye_color}</div>
      <div className="Birth_Year"> {birth_year}</div>
      <div className="Gender"> {gender}</div>
      <div className="Homeworld"> {homeworld}</div>

      <div className="UrlsFilms">
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
            
      <div className="UrlsSpecies">
        <ul>
        {CharacterData.species.length &&
          CharacterData.species.map((item, index) => (
            <li key={index}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

        <div className="UrlsVehicles">
        <ul>
        {CharacterData.vehicles.length &&
          CharacterData.vehicles.map((item, index) => (
            <li key={index}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="UrlsStarships">
        <ul>
        {CharacterData.starships.length &&
          CharacterData.starships.map((item, index) => (
            <li key={index}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default CharacterComponent;
