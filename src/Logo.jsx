/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import './index.css'

class Logo extends Component {
  render() {
    return (
      <div clasName="Container">
        <img src="https://duckduckgo.com/assets/logo_homepage.normal.v108.svg" href={window.scrollTo(0, 250)} className="mainLogo" alt="" />

        <span className="tag">conocer más</span>
      </div>
    )
  }
}

export default Logo
