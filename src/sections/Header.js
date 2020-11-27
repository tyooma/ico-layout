import React from 'react'
import background from '../img/header-bg.png'

const { Navbar } = require("../components/Navbar")
const { Coins } = require("../components/Coins")
const { Burger } = require("../components/Burger")

export const Header = () => {
  return (
    <div className="header" id="whitepaper">
      <img
        src={background}
        alt="background"
        className="header__bg"
      />
      <Coins />
      <div className="container header__container">
        <div className="header__nav-container">
          <Burger />
          <Navbar />
          <div className="header__nav-first-sub-container" />
          <div className="header__nav-second-sub-container" />
        </div>
        <div className="header__content">
          <div className="header__title">
            The ICO Mining Revolution Begins!
          </div>
          <div className="header__description">
            The Miner One Crowdsale has ended. More than 13 million MIO Tokens were sold. We are now building the world’s most profitable mining operation.
          </div>
          <div className="header__btns">
            <div className="header__btn">
              <a href="#blog" className="header__link">
                Stay tuned for all the details!
              </a>
            </div>
            <div className="header__btn header__btn_white">
              <a href="#team" className="header__link header__link_white">
                White paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
