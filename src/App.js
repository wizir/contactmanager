import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFount from "./components/pages/NotFound";
import AddContact from "./components/contacts/AddContact";
import EditContact from './components/contacts/EditContact';
import Test from './components/test/Test';
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding="Contact manager" />
            <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/contact/add" component={AddContact}/>
              <Route exact path="/contact/edit/:id" component={EditContact}/>
              <Route exact path="/about/:id?" component={About}/>
              <Route exact path="/test" component={Test}/>
              <Route component={NotFount}/>
            </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
