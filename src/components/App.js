import * as React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
