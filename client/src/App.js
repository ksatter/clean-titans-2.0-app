<<<<<<< HEAD
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
=======
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
>>>>>>> 61042f4d4debc92d51c5aadbd272455f63281a02
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import ParentNav from "./components/Nav";

// App.js
import Auth from './Auth/Auth.js';
const auth = new Auth();
auth.login();

const App = () =>
    <Router>
        <div>
            <ParentNav/>
            <Switch>
                <Route exact path="/" component={Books}/>
                <Route exact path="/books" component={Books}/>
                <Route exact path="/books/:id" component={Detail}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    </Router>;

export default App;
