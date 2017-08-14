import React from 'react'
import {shell} from 'electron'
import Button from './button.jsx'
import Title from './title.jsx'
var fs = require('fs')

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = ({
      imminent: false,
      cancelState: false,
      startState: false,
      path: "Drop Files Here"
    })
  }

  cancel() {
    //on button cancel clicked
    this.setState({
      cancelState: true,
      path: "Drop Files Here"
    })
    console.log('Cancel Cicked!')
  }

  start() {
    //on button 'start' clicked
    this.setState({
      startState: true
    })
    console.log('Start Cicked!')
    var path = this.state.path
    //The magic happens here!
  }

  dragEnter(e) {
    this.setState({
      imminent: true
    })
    e.target.style.opacity = "0.4"
    e.preventDefault()
  }

  dragOver(e) {e.preventDefault()}

  dragStart(e) {
    e.preventDefault()
    e.dataTransfer.effectAllowed = "copy"
    // console.log('---dragStart Called---')
  }

  dragLeave(e) {
    // console.log('---dragLeave Called---')
    this.setState({
      imminent: false
    })
    e.target.style.opacity = "1"
    e.preventDefault()
  }

  drop(e) {
    e.preventDefault()
    this.setState({
      imminent: false,
      cancelState: false
    })
    e.target.style.opacity = "1"
    this.setState({
      path: e.dataTransfer.files[0].path
    })
    let path = e.dataTransfer.files[0].path
    fs.lstat(path, (err, stats) => {

      if (err)
        return console.log(err); //Handle error

      console.log(`Is file: ${stats.isFile()}`);
      console.log(`Is directory: ${stats.isDirectory()}`);
      console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
      console.log(`Is FIFO: ${stats.isFIFO()}`);
      console.log(`Is socket: ${stats.isSocket()}`);
      console.log(`Is character device: ${stats.isCharacterDevice()}`);
      console.log(`Is block device: ${stats.isBlockDevice()}`);
    })
    // if (e.dataTransfer.)
    console.log(e.dataTransfer.files[0].path)
    console.log(e.dataTransfer)
    // console.log('---drop Called---')
  }

  render() {
    return (
      <div>
        <Title>Duplico</Title>
        <div className = {
            this.state.imminent ? 
              'file-box imminent' : 'file-box'
          }
          onDragEnter = {this.dragEnter.bind(this)}
          onDragOver = {this.dragOver.bind(this)}
          onDragLeave = {this.dragLeave.bind(this)}
          onDrop = {this.drop.bind(this)}
          onDragStart = {this.dragStart.bind(this)}
          onDragOver = {this.dragOver.bind(this)}>
          {this.state.path}
        </div>
        <div className='button-wrapper'>
          <div className='button' onClick={this.cancel.bind(this)}>
            <span id='button-text'>
              Cancel
            </span>
          </div>
          <div className='button' onClick={this.start.bind(this)}>
            <span id='button-text'>
              Start
            </span>
          </div>
        </div>
      </div>
    )
  }
}