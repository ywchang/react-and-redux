import * as React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import CoursesList from "./CoursesList";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return <CoursesList courses={this.props.courses}/>;
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
