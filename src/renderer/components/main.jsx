import React from 'react';
import {shell} from 'electron';
import EmojiWall from './emoji-wall';

const TITLEBAR_HEIGHT = 30;

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello GitHub Universe!',
      welcome: true
    };
  }

  openGithub() {
    shell.openExternal('https://github.com/mnquintana/electron-compile-universe');
  }

  handleClick() {
    this.setState({
      welcome: false
    });
  }

  render() {
    let img;

    if (this.state.welcome) {
      img = <img src="../assets/images/electron.svg" alt="" width="128px" ref="mainImg" />;
    } else {
      img = <EmojiWall />;
    }

    return (
      <div className="main" onClick={this.handleClick.bind(this)} ref="main" style={{
        paddingTop: TITLEBAR_HEIGHT
      }}>
        <h1>{this.state.message}</h1>

        {img}

        <footer>
          <p>
            Provided by <a href="#" onClick={this.openGithub.bind(this)}>electron-compile-universe</a>
          </p>
        </footer>
      </div>
    );
  }
}
