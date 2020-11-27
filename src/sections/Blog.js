import React from 'react'

import emailBox from '../img/email-box.png'

export const Blog = () => {
  return (
    <div className="blog" id="blog">
      <div className="container blog__container">
        <img
          src={emailBox}
          alt="email box"
          className="blog__img"
        />
        <h2 className="blog__title">
          Get In Touch
        </h2>
        <p className="blog__description">
          Miner One is a cutting-edge, crowdfunded bitcoin mining operation built and managed by a team of data centre industry experts on behalf of the Miner One Community. Miner One Community Members contribute to building mining centres and share the output transparently using Ethereum-based “smart contracts”.
        </p>
        <div className="blog__form">
          <input
            type="text"
            placeholder="Leave your email here...."
            className="blog__input"
          />
          <div className="blog__btn">
            <a href="#whitepaper" className="blog__link">
              Get Action
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
