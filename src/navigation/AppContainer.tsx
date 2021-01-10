import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginScreen } from "../pages/main";
import MenuScreen from "../pages/main/menu";

import store from "../redux/createStore";
import LoginRoute from "../route/LoginRoute";
import PrivateRoute from "../route/PrivateRoute";



const AppContainer = () => {
    return (<Provider store={store} >
        <Router>
            <Switch>
                <LoginRoute path="/login"> <LoginScreen /></LoginRoute>
                <PrivateRoute path="/"  > <MenuScreen /></PrivateRoute>
            </Switch>
        </Router>

        {/* <LoginScreen /> */}
    </Provider>)
}
export default AppContainer;