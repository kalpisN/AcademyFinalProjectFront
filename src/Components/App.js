import React from 'react';

import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllRecipes from "./AllRecipes";
import NewRecipe from "./NewRecipe";
import ShoppingList from "./ShoppingList";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Kaikki reseptit tänne alle pinterest-tyyliin (home)</Link>
              </li>
              <li>
                <Link to="/lisaa">Lisää uusi resepti ja ainesosa täällä</Link>
              </li>
              <li>
                <Link to="/kauppalista">Kauppalista löytyy täältä</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/lisaa">
              <NewRecipe/>
            </Route>
            <Route path="/kauppalista">
              <ShoppingList/>
            </Route>
            <Route path="/">
              <AllRecipes />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}



export default App;
