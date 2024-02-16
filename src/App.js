import React, { useState, useEffect } from "react";
import CharacterComponent from "./components/CharacterComponent.js";
import PlanetsComponent from "./components/PlanetsComponent.js";
import CharacterObj from "./fetchData.js";
import FilmsComponent from "./components/FilmsComponent.js";

const AccordionItem = ({ title, data, renderItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {data.results &&
            data.results.map((item, index) => (
              <div key={index}>{renderItem(item)}</div>
            ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [Characters, setCharacters] = useState({});
  const [Planets, setPlanets] = useState({});
  const [Films, setFilms] = useState({});
  let [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchDataAndSetCharacters = async () => {
      try {
        const data = await CharacterObj.GetPeople(pageNo);
        setCharacters(data);
      } catch (error) {
        console.log("Error fetching character data:", error);
      }
    };

    const fetchDataAndSetPlanets = async () => {
      try {
        const data = await CharacterObj.GetPlanets(pageNo);
        setPlanets(data);
      } catch (error) {
        console.log("Error fetching planet data:", error);
      }
    };
    const fetchDataAndSetFilms = async () => {
      try {
        const data = await CharacterObj.GetFilms(pageNo);
        setFilms(data);
      } catch (error) {
        console.log("Error fetching films data:", error);
      }
    };

    fetchDataAndSetCharacters();
    fetchDataAndSetPlanets();
    fetchDataAndSetFilms();
  }, [pageNo]);

  const next = () => {
    setPageNo(pageNo + 1);
  };

  const prev = () => {
    setPageNo(pageNo - 1);
  };

  return (
    <div className="App">
      {Characters.previous && <button onClick={prev}>PREVIOUS</button>}
      {Characters.next && <button onClick={next}>NEXT</button>}

      <AccordionItem
        title="Karakterler"
        data={Characters}
        renderItem={(character) => (
          <CharacterComponent key={character.name} CharacterData={character} />
        )}
      />

      <AccordionItem
        title="Gezegenler"
        data={Planets}
        renderItem={(planet) => (
          <PlanetsComponent key={planet.name} PlanetsData={planet} />
        )}
      />
      <AccordionItem
        title="Filmler"
        data={Films}
        renderItem={(film) => (
          <FilmsComponent key={film.title} FilmsData={film} />
        )}
      />
    </div>
  );
};

export default App;
