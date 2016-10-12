import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About This App</h1>
        <h3>This is a boilerplate for React development.</h3>
        <p>This app uses <a href="#" className="dependency">Webpack</a> for bundling CSS and JavaScript files, as well as hot reloading.
        It also uses <a href="#" className="dependency">Babel</a> to compile JSX and ES2015 code into ES5.
        Additionally, it uses <a href="#" className="dependency">ESLint</a> to monitor JavaScript and JSX code for errors and display them in the console.</p>
        <p>There are a number of other dependencies to spruce things up and make getting a project or practice coding session started
        as quickly and easily as possible. Future versions may include state containers such as <a href="#" className="dependency">Redux</a> or <a href="#" className="dependency">Flux</a>.</p>
      </div>
    );
  }
}

export default AboutPage;
