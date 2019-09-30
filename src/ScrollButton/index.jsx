/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'
import './style.css'

export default class ScrollButton extends Component {
  constructor() {
    super()
    this.state = {
      section: 1,
    }
    this.click = this.click.bind(this)
  }

  click() {
    const { section } = this.props

    if (section < 4) {
      window.scrollTo(0, section * 500)

      this.setState({
        section: section + 1,
      })
    }
  }

  render() {
    return (
      <div className="button" onClick={this.click}>
        <div className="arrow" />
      </div>
    )
  }
}
