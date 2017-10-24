import * as React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import CourseListRow from "./CourseListRow";

const CourseList = ({courses}) => {
  return (
    <div>
      <h1>Courses</h1>
      <Link to="/course" className="btn btn-primary">Add Course</Link>
      <table className="table">
        <tbody>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
        {courses.map(course => <CourseListRow key={course.id} course={course}/>)}
        </tbody>
      </table>
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
