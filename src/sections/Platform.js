import React from 'react'

import platformFirst from '../img/platform-1.png'
import platformSecond from '../img/platform-2.png'
import platformThird from '../img/platform-3.png'
import platformFourth from '../img/platform-4.png'

export const Platform = () => {
  const platform = [
    {
      id: '1',
      title: 'Mining',
      description: 'Miner One Community Targeted with Pitch for Rival Company',
      image: platformFirst
    },
    {
      id: '2',
      title: 'Bitcoin',
      description: 'Dramatic Hardware Price Drop Is Great News for Miner One',
      image: platformSecond
    },
    {
      id: '3',
      title: 'Blockchain',
      description: 'Miner One Community Targeted with Pitch for Rival Company',
      image: platformThird
    },
    {
      id: '4',
      title: 'Cryptocurrency',
      description: 'Miner One Community Targeted with Pitch for Rival Company',
      image: platformFourth
    }
  ]

  return (
    <div className="platform">
      <div className="container">
        <div className="platform__container">
          {
            platform.map(item => (
              <div className={`platform__item platform__item--${item.id}`} key={item.id}>
                <div className="platform__img">
                  <img
                    src={item.image}
                    alt="platform"
                  />
                </div>
                <div className="platform__card">
                  <div className="platform__title">
                    {item.title}
                  </div>
                  <div className="platform__description">
                    {item.description}
                  </div>
                  <div className="platform__frame" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
