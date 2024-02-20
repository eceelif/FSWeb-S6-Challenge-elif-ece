import React from "react";
//"films": "https://swapi.dev/api/films/",

const FilmsComponent = (props) => {
  const { FilmsData } = props;
  
  //const FilmsData = props.FilmsData;
  
   const { title, episode_id, opening_crawl, director, producer, 
     release_date, species, vehicles, starships, characters, planets} = FilmsData;
 

  return (
    <div className="container">
      <div className="Title"> {title} </div>
      <div className="Episode_ID"> {episode_id}</div>
      <div className="Opening_Crawl"> {opening_crawl}</div>
      <div className="Director"> {director}</div>
      <div className="Producer"> {producer}</div>
      <div className="Release_Date"> {release_date}</div>

      <div className="UrlsCharacters">
        <ul>
        {
            characters.length > 0 &&
            characters.map((item, index) => (
                <li key={index}>
                <a href={item}>{item}</a>
                </li>
            ))
        }
        </ul>
      </div>
            
      <div className="UrlsSpecies">
        <ul>
        {
            species.length > 0 &&
            species.map((item, index) => (
            <li key={index}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

        <div className="UrlsVehicles">
        <ul>
        {
          vehicles.length > 0 &&
          vehicles.map((item, index) => (
            <li key={index}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="UrlsStarships">
        <ul>
        {
          starships.length > 0 &&
          starships.map((item, index) => (
            <li key={index}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="UrlsPlanets">
        <ul>
        {
            planets.length > 0 &&
            planets.map((item, index) => (
                <li key={index}>
                <a href={item}>{item}</a>
                </li>
            ))
        }
        </ul>
      </div>

    </div>
  );
};


export default FilmsComponent;