import React from 'react'

export const Burger = () => {
  const menu = [
    {
      id: '1',
      title: 'Whitepaper',
      href: 'whitepaper'
    },
    {
      id: '2',
      title: 'Solutions',
      href: 'solutions'
    },
    {
      id: '3',
      title: 'Team',
      href: 'team'
    },
    {
      id: '4',
      title: 'Token',
      href: 'token'
    },
    {
      id: '5',
      title: 'Platform',
      href: 'platform'
    },
    {
      id: '6',
      title: 'Roadmap',
      href: 'roadmap'
    },
    {
      id: '7',
      title: 'Blog',
      href: 'blog'
    },
    {
      id: '8',
      title: 'My wallet',
      href: 'wallet'
    }
  ]

  return (
    <div className="burger">
      <input
        id="burger__toggler"
        type="checkbox"
        className="burger__toggler"
      />
      <label className="burger__btn" htmlFor="burger__toggler">
        <span></span>
      </label>

      <ul className="burger__box">
        {
          menu.map(item => (
            <li className="burger__item" key={item.id}>
              <a
                className="burger__link"
                href={`#${item.href}`}
              >
                {item.title}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
