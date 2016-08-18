import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

import CourseList from './CourseList';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: React.PropTypes.func.isRequired,
  courses: React.PropTypes.array.isRequired,
  // createCourse: React.PropTypes.func.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  // return {
  //   createCourse: course => dispatch(courseActions.createCourse(course))
  // };

  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage) ;
