/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import './App.css'

export default class Background extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="background">{children}</div>
    )
  }
}
