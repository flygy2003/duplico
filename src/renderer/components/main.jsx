import React from 'react';
import {shell} from 'electron';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello GitHub Universe!'
    };
  }

  componentDidMount() {
    // await window.fetch()
  }

  openGithub() {
    shell.openExternal('https://github.com/mnquintana/electron-compile-universe');
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron main">
          <h1>{this.state.message}</h1>
          <img src="../assets/images/electron.svg" alt="" width="128px"></img>
          <p>
            Provided by <a href="#" onClick={this.openGithub.bind(this)}>electron-compile-universe<span className="glyphicon glyphicon-heart"></span></a>
          </p>
        </div>
      </div>
    );
  }
}
