import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//This shows a warning for some type issue I don't understand.  Its for code splitting.
// const About = lazy(() => import('./About'));
// const Home = lazy(() => import('./Home'));

import MealHistory from "./MealHistory";
import MealEntry from "./MealEntry";
import Home from "./Home"


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
                <Route path="/meals">
                    <MealHistory/>
                </Route>
                <Route path="/meal">
                    <MealEntry/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
