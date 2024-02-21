import React from "react";
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import CharacterComponent from "./components/CharacterComponent";

const App = () => {
  return (
    <>
      <Link to="/">Home deneme 2  ***</Link>

      <Link to="/character/:name">{CharacterComponent.name}</Link>
   


    <Router>
      <Switch>
        {/* ... (diğer route'lar) */}
        <Route path="/character/:name" component={CharacterComponent} />
      </Switch>
    </Router>
    </>
  );
};

export default App;
