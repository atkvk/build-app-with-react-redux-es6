import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/index';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ''}
    };

    this._onTitleChange = this._onTitleChange.bind(this);
    this._onClickSave = this._onClickSave.bind(this);
  }

  _onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  _onClickSave() {
    // alert(`Saving ${this.state.course.title}`);
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  _courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        {this.props.courses.map(this._courseRow)}
        <input type="text"
               value={this.state.course.title}
               onChange={this._onTitleChange}/>

        <input type="submit"
               value="Save"
               onClick={this._onClickSave}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  courses: React.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}


export default connect(mapStateToProps)(CoursesPage) ;
