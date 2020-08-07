import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import MealHistory from "./MealHistory";
import MealEntry from "./MealEntry";
import SignUp from "./SignUp";
import ResponsiveDrawer from "./ResponsiveDrawer";

export default function App(){
    return(
        <Router>
            <ResponsiveDrawer>
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
                    <Route exact={true} path="/signup">
                        <SignUp/>
                    </Route>
                </Switch>
            </ResponsiveDrawer>
        </Router>
    )
}
