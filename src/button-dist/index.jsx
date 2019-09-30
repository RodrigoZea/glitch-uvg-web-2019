/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import './style.css'

export default class DiscButton extends Component {
  render() {
    return (
      <div className="install">
        <button type="install-button">Add DuckDuckGo to Firefox</button>
      </div>
    )
  }
}
