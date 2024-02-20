import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterComponent from "./components/CharacterComponent";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* ... (diğer route'lar) */}
        <Route path="/character/:name" component={CharacterComponent} />
      </Switch>
    </Router>
  );
};

export default App;
