import React from 'react'

import circlePit from '../img/roadmap-circle-pit.png'
import line from '../img/roadmap-line.png'
import paperPlane from '../img/roadmap-paper-plane.png'
import circleFirst from '../img/roadmap-circle-1.png'
import circleSecond from '../img/roadmap-circle-2.png'
import circleThird from '../img/roadmap-circle-3.png'
import circleItemFirst from '../img/roadmap-circle-item-1.png'
import circleItemSecond from '../img/roadmap-circle-item-2.png'
import circleItemThird from '../img/roadmap-circle-item-3.png'

export const Roadmap = () => {
  const roadmap = [
    {
      id: '1',
      circleImg: circleFirst,
      itemImg: circleItemFirst,
      title: 'Startup (2010)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
      id: '2',
      circleImg: circleSecond,
      itemImg: circleItemSecond,
      title: 'Rundown (2016)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
      id: '3',
      circleImg: circleThird,
      itemImg: circleItemThird,
      title: 'Get  Awards (2018)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    }
  ]

  return (
    <div className="roadmap">
      <div className="container roadmap__container">
        <img
          src={circlePit}
          alt="background circle"
          className="roadmap__circle-pit"
        />
        <div className="roadmap__subtitle">
          Road map
        </div>
        <div className="roadmap__title">
          Finalisation of all transfers of MIO Token allocations
        </div>
        
        <div className="roadmap__line">
          {
            roadmap.map(item => (
              <div className={`roadmap__item roadmap__item--${item.id}`} key={item.id}>
                <div className="roadmap__item-circle-wrapper">
                  <img
                    src={item.circleImg}
                    alt="circle"
                    className="roadmap__item-circle"
                  />
                  <img
                    src={item.itemImg}
                    alt="ico"
                    className="roadmap__item-circle-ico"
                  />
                </div>

                <div className={`roadmap__item-info roadmap__item-info--${item.id}`}>
                  <div className="roadmap__item-title">
                    {item.title}
                  </div>
                  <div className="roadmap__item-description">
                    {item.description}
                  </div>
                </div>
              </div>
            ))
          }
          <img
            src={paperPlane}
            alt="paper plane"
            className="roadmap__paper-plane"
          />
          <img
            src={line}
            alt="roadmap line"
          />
        </div>
      </div>
    </div>
  )
}
