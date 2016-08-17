import React from 'react';

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
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>

        <input type="text"
               value={this.state.course.title}
               onChange={this._onTitleChange}/>

        <input type="submit"
               value="Save"
               onClick={this._onClickSave}/>
      </div>
    )
  }
}

export default CoursesPage;
