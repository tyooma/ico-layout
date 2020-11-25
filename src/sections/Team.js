import React from 'react'

import firstCard from '../img/team-card-1.png'
import secondCard from '../img/team-card-2.png'
import thirdCard from '../img/team-card-3.png'

export const Team = () => {
  const cards = [
    {
      id: 1,
      image: firstCard,
      title: 'Cutting-Edge ICO Mining',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      image: secondCard,
      title: 'World-Class Team We Have',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      image: thirdCard,
      title: 'Profits For The Community',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]

  return (
    <div className="container team">
      <div className="cards">
        {
          cards.map(card => (
            <div className="cards__item" key={card.id}>
              <img
                src={card.image}
                alt="card img"
                className="cards__img"
              />
              <div className="cards__title">
                {card.title}
              </div>
              <p className="cards__description">
                {card.description}
              </p>
            </div>
          ))
        }
      </div>
      <div className="team__btn">
        <a href="#findoutmore" className="team__link">
          Find out more
        </a>
      </div>
    </div>
  )
}
