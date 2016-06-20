import React from 'react';
import {shell} from 'electron';

export default class Main extends React.Component {
  state = {
    message: 'Hello, Electron'
  }

  openGithub() {
    shell.openExternal('https://github.com/mnquintana/electron-jsx-babel-boilerplate');
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron main">
          <h1>{this.state.message}</h1>
          <img src="../assets/images/electron.svg" alt="" width="128px"></img>
          <p>
            Provided by <a href="#" onClick={this.openGithub.bind(this)}>electron-jsx-babel-boilerplate<span className="glyphicon glyphicon-heart"></span></a>;
          </p>
        </div>
      </div>
    );
  }
}
