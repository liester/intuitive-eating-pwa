import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import MealHistory from "./MealHistory";
import MealEntry from "./MealEntry";
import history from './history'

export default function App(){
    return(
        <Router history={history}>
            <Switch>
                <Route exact={true} path="/">
                    <Home/>
                </Route>
                <Route exact={true} path="/meal-history">
                    <MealHistory/>
                </Route>
                <Route exact={true} path="/meal-entry">
                    <MealEntry/>
                </Route>
            </Switch>
        </Router>
    )
}
