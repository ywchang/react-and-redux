import * as React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./courses/CoursesPage";
import Header from "./common/Header";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/courses" component={CoursesPage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
