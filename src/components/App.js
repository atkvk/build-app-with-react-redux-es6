import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

require('../styles/styles.css');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
