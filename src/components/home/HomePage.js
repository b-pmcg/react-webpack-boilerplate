import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>React Boilerplate</h1>
        <p>Start coding right away!</p>
        <Link to="about" className="btn btn-primary btn-lg">Check It</Link>
      </div>
    );
  }
}

export default HomePage;
