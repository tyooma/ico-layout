import React from 'react'

import rectangle from '../img/solution-id-rect.png'
import rectangleMini from '../img/solution-id-rect-mini.png'

export const Solutions = () => {
  const solutions = [
    {
      id: '01',
      title: 'Finalisation of all transfers of MIO Token allocations'
    },
    {
      id: '02',
      title: 'Mining facility preparation – installation of equipment,  including electricaland ventilation'
    },
    {
      id: '03',
      title: 'Mining hardware purchase orders & Prepare & retina ready elements'
    },
    {
      id: '04',
      title: 'Development of Miner One B-Wallet software for your wallet'
    }
  ]
  const rectangles = [1, 2, 3]

  return (
    <div className="solutions" id="solutions">
      <div className="container solutions__container">
        <div className="solutions__subtitle">
          Your step for mine
        </div>
        <h1 className="solutions__title">
          The following steps are currently in progress:
        </h1>
        <div className="solutions__list">
          {
            solutions.map(solution => (
              <div className="solutions__item" key={solution.id}>
                {
                  rectangles.map(rectangle => (
                    <img
                      src={rectangleMini}
                      alt="rectangle mini"
                      className={`solutions__rectangle-mini solutions__rectangle-mini--${rectangle}`}
                    />
                  ))
                }
                <img
                  src={rectangle}
                  alt="rectangle"
                  className="solutions__rectangle"
                />
                <div className="solutions__id">
                  {solution.id}
                </div>
                <div className="solutions__text">
                  {solution.title}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
