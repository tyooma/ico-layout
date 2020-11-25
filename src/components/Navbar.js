import React from 'react'

import logo from '../img/logo.png'

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo-container">
        <img
          src={logo}
          alt="logo"
          className="nav__logo"
        />
        <div className="nav__logo-text">
          Ico Luban
        </div>
      </div>

      <ul className="nav__list">
        <li className="nav__item">
          <a href="#whitepaper" className="nav__link">
            Whitepaper
          </a>
        </li>
        <li className="nav__item">
          <a href="#solutions" className="nav__link">
            Solutions
          </a>
        </li>
        <li className="nav__item">
          <a href="#team" className="nav__link">
            Team
          </a>
        </li>
        <li className="nav__item">
          <a href="#token" className="nav__link">
            Token
          </a>
        </li>
        <li className="nav__item">
          <a href="#platform" className="nav__link">
            Platform
          </a>
        </li>
        <li className="nav__item">
          <a href="#roadmap" className="nav__link">
            Roadmap
          </a>
        </li>
        <li className="nav__item">
          <a href="#blog" className="nav__link">
            Blog
          </a>
        </li>
      </ul>

      <div className="nav__options">
        <select
          name="language"
          id="language"
          className="nav__dropdown"
        >
          <option
            value="Eng"
            selected
            className="nav__dropdown-item"
          >
            Eng
          </option>
          <option value="Rus"className="nav__dropdown-item">
            Rus
          </option>
        </select>
        <div className="nav__wallet-container">
          <a href="#wallet" className="nav__wallet">
            My Wallet
          </a>
        </div>
      </div>
    </nav>
  )
}
