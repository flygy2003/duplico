import React from 'react'
import { shell } from 'electron'

export default class Button extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='button'>
        {this.props.children}
      </div>
    )
  }
}