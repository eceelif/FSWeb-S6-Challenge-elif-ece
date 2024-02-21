import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CharacterComponent from "./components/CharacterComponent";
import PlanetsComponent from "./components/PlanetsComponent";
import CharacterObj from "./fetchData";
import FilmsComponent from "./components/FilmsComponent";

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
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
          </ul>
        </nav>

        {Characters.previous && <button onClick={prev}>PREVIOUS</button>}
        {Characters.next && <button onClick={next}>NEXT</button>}

        <Route path="/characters">
          <AccordionItem
            title="Karakterler"
            data={Characters}
            renderItem={(character) => (
              <CharacterComponent
                key={character.name}
                CharacterData={character}
              />
            )}
          />
        </Route>

        <Route path="/planets">
          <AccordionItem
            title="Gezegenler"
            data={Planets}
            renderItem={(planet) => (
              <PlanetsComponent key={planet.name} PlanetsData={planet} />
            )}
          />
        </Route>

        <Route path="/films">
          <AccordionItem
            title="Filmler"
            data={Films}
            renderItem={(film) => (
              <FilmsComponent key={film.title} FilmsData={film} />
            )}
          />
        </Route>
      </div>
    </Router>
  );
};

export default App;
