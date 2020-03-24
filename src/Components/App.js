import React from 'react';

import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Search from "./Search";
import NewRecipe from "./NewRecipe";
import ShoppingList from "./ShoppingList";


function App() {
    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <ul className={"navBar"}>
                        <li className={"link"}><Link to="/">Kaikki reseptit tänne alle pinterest-tyyliin (home)</Link></li>
                        <li className={"link"}><Link to="/uusiresepti">Lisää uusi resepti ja ainesosa täällä</Link></li>
                        <li className={"link"}><Link to="/kauppalista">Kauppalista löytyy täältä</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/uusiresepti">
                            <NewRecipe/>
                        </Route>
                        <Route path="/kauppalista">
                            <ShoppingList/>
                        </Route>
                        <Route path="/">
                            <Search/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}


export default App;
