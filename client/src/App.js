import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { ParentNav, ChildNav } from "./components/Nav";
import {ParentMain} from "./sections/Parent";
import {ChildMain} from "./sections/Child";
import Auth from './Auth/Auth.js';


const auth = new Auth();


class Login extends React.Component {
    sign_user = () => {
        auth.login();
    };

    render() {
        return (
            <div>
                <h1>Welcome to Auth0 app</h1>

                <button onClick={this.sign_user}>Click to sign in</button>
            </div>
        );
    }
}

const App = () =>
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/parent" component={ParentMain}/>
            <Route path="/child" component={ChildMain}/>
        </Switch>
    </Router>;


export default App;
