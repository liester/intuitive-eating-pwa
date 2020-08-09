import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import MealHistory from "./MealHistory";
import MealEntry from "./MealEntry";
import SignUp from "./SignUp";
import ResponsiveDrawer from "./ResponsiveDrawer";
import LogOut from "./LogOut";
import {setAuthorizationToken} from './axios'

export default function App(){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if (user){
            setUser(user)
            setAuthorizationToken(user.accessToken);
        }else{
            setUser(null)
        }
    }, [])
    return(
        <Router>
            {user ?
                <ResponsiveDrawer user={user}>
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
                        <Route exact={true} path="/log-out">
                            <LogOut setUser={setUser}/>
                        </Route>
                    </Switch>
                </ResponsiveDrawer>
                :
                <SignUp setUser={setUser}/>}
        </Router>
    )
}
