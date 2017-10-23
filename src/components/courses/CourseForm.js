import * as React from "react";
import PropTypes from 'prop-types';

const CourseForm = (props) => {
  return (
    <div>
      <h2>Add Course</h2>
      <input type="text" onChange={props.onTitleChange} value={props.course.title}/>
      <input type="submit" value="Save" onClick={props.onClickSave}/>
    </div>
  );
};

CourseForm.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

export default CourseForm;
