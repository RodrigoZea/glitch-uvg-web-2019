/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import './Slide.css'

class Slide extends Component {
  render() {
    const { imgPath } = this.props
    const { bgColor } = this.props
    const { txtColor } = this.props
    const { shadow } = this.props
    const { title } = this.props
    const { description } = this.props

    const image = {
      backgroundImage: `url(${imgPath})`,
      width: '1000px',
      height: '385px',
      zoom: '0.8',
      margin: 'auto auto auto auto',
    }

    const backColor = {
      background: `#${bgColor}`,
    }

    const textColor = {
      color: `#${txtColor}`,
    }

    const textShadow = {
      color: `#${txtColor}`,
      textShadow: '0 1px 4px rgba(0,0,0,0.25)',
    }

    return (
      <div className="slideContainer" style={backColor}>
        <h1 style={shadow ? textShadow : textColor}>{title}</h1>
        <h2 style={textColor}>{description}</h2>
        <button type="submit">Add DuckDuckGo to Chrome</button>
        <div className="slideImage" style={image} />
      </div>
    )
  }
}

export default Slide
