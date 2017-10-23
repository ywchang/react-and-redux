import * as React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const CoursesList = (props) => {

  return (
    <div>
      <h1>Courses</h1>
      <Link to="/course">Manage Course</Link>
      {props.courses.map((course, index) => <div key={index}>{course.title}</div>)}
    </div>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CoursesList;
