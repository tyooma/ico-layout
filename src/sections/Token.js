import React from 'react'

import play from '../img/play-ico.svg'

export const Token = () => {
  return (
    <div className="token">
      <div className="container token__container">
        <div className="token__btn-wrapper">
          <div className="token__btn">
            <img
              src={play}
              alt="play ico"
              className="token__btn-ico"
            />
          </div>
        </div>
        <div className="token__description">
          Please be sure to complete your KYC procedure to ensure the smooth functioning of your MIO Tokens. It is required of all MIO Token Holders.
        </div>
      </div>
    </div>
  )
}
