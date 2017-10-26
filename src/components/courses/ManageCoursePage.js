import * as React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";
import toastr from "toastr";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      saving: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({
        course: Object.assign({}, nextProps.course)
      });
    }
  }

  onChange(event) {
    let field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    this.setState({course});
  }

  onSave(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course).then(() => {
      this.setState({saving: false});
      toastr.success("Save successfully");
      this.props.history.push("/courses");
    }).catch(error => {
      this.setState({saving: false});
      toastr.error(error);
    });
  }

  render() {
    const {allAuthors} = this.props;
    return (
      <CourseForm
        course={this.state.course}
        allAuthors={allAuthors}
        errors={{}}
        onChange={this.onChange}
        onSave={this.onSave}
        saving={this.state.saving}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

function mapAuthorToSelectOption(author) {
  return {
    text: `${author.firstName} ${author.lastName}`,
    value: author.id
  };
}

function getInitialCourseProp(state, props) {
  let defaultCourse = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  const courseId = props.match.params.courseId;
  let redirectBack = () => props.history.push("/courses");
  return getCourseById(courseId, state.courses, redirectBack) || defaultCourse;
}

function getCourseById(courseId, courses, notFoundCallback) {
  if (!courseId || courses.length === 0) {
    return null;
  }
  let courseFound = courses.filter(c => c.id === courseId);
  return courseFound[0] || notFoundCallback();
}

function mapStateToProps(state, ownProps) {
  return {
    course: getInitialCourseProp(state, ownProps),
    allAuthors: state.authors.map(author => mapAuthorToSelectOption(author))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
