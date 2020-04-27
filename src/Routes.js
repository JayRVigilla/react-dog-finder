import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogFinder from "./DogFinder";
import DogDetails from "./DogDetails";



function Routes({ dogs }){


    return(
        <Switch>
            <Route exact path="/dogs">
                <DogFinder/>
            </Route>

            <Route path="/dogs/:name">
                <DogDetails name={dogs}/>
            </Route>

            <Redirect to="/dogs"/>
        </Switch>
    )
}


export default Routes;