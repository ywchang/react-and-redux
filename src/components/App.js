import * as React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import Header from "./common/Header";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    let {loading} = this.props;
    return (
      <div className="container-fluid">
        <Header loading={loading}/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/courses" component={CoursesPage}/>
          <Route path="/course" exact component={ManageCoursePage}/>
          <Route path="/course/:courseId" component={ManageCoursePage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default withRouter(connect(mapStateToProps)(App));
