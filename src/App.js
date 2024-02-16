import React, { useState, useEffect } from "react";
//import CharacterComponent from "./components/CharacterComponent.js";
import CharacterObj from "./fetchData.js";
import PlanetsComponent from "./components/PlanetsComponent.js";

const App = () => {
  const [Planets, setPlanets] = useState({});
  let [pageNo, setPageNo] = useState(1); //?

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {

    
    const fetchDataAndSetPlanets = async () => {
      try {
        console.log(pageNo);
        const data = await CharacterObj.GetPlanets(pageNo);
        console.log("App de verileri", data);

        setPlanets(data);
        console.log("App de verileri 2", data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchDataAndSetPlanets();
  }, [pageNo]);

 const next= ()=>{
    let tmp_pageNo=pageNo +1;
    setPageNo(tmp_pageNo);
    console.log(pageNo);
  }
 const prev= ()=>{
  let tmp_pageNo=pageNo -1;
    setPageNo(tmp_pageNo);
    console.log(pageNo);
  }
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.  
  //console.log(Characters);
  return (
    <div className="App">
      {Planets.previous &&
        <button onClick={prev}>PREVIOUS</button>
      }
      
      {Planets.next &&
        <button onClick={next} >NEXT</button>
      }
    
      <h1 className="Header">Gezegenler</h1>
      { 
  Planets.results &&
  Planets.results.map((planets, index) => (
    <PlanetsComponent key={index} PlanetsData={planets} />
  )) }
</div>
);
};
export default App;