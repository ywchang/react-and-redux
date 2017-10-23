import * as React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(event) {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  }

  render() {
    return (
      <CourseForm
        onTitleChange={this.onTitleChange}
        onClickSave={this.onClickSave}
        course={this.state.course}/>
    );
  }
}

ManageCoursePage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
