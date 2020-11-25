import React from 'react'

import firstItem from '../img/header-bg-item-1.png'
import secondItem from '../img/header-bg-item-2.png'
import thirdItem from '../img/header-bg-item-3.png'
import fourthItem from '../img/header-bg-item-4.png'

export const Coins = () => {
  return (
    <div className="coins">
      <img
        src={firstItem}
        alt="item"
        className="coins__item coins__item--1"
      />
      <img
        src={secondItem}
        alt="item"
        className="coins__item coins__item--2"
      />
      <img
        src={thirdItem}
        alt="item"
        className="coins__item coins__item--3"
      />
      <img
        src={fourthItem}
        alt="item"
        className="coins__item coins__item--4"
      />
    </div>
  )
}
