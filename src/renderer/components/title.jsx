import React from 'react'
import { shell } from 'electron'

export default class Title extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='title'>
        {this.props.children}
      </div>
    )
  }
}