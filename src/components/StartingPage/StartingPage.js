import React from 'react';
import { Link } from 'react-router-dom'

export default function StartingPage() {
  return (
    <div className='startingPage'>
      <div className='startingPage__container'>
        <div className='startingPage__welcome'>
          <h1 className='startingPage__title'>Дневник для главного</h1>
          <p className='startingPage__subtitle'>Важные моменты в жизни твоего малыша</p>
        </div>
        <nav className='startingPage__menu'>
          <ul className='startingPage__list'>
            <li className='startingPage__list-item'>
              <Link className='startingPage__link' to=''>Измерения</Link>
            </li>
            <li className='startingPage__list-item'>
              <Link className='startingPage__link' to=''>Прививки</Link>
            </li>
            <li className='startingPage__list-item'>
              <Link className='startingPage__link' to=''>События</Link>
            </li>
            <li className='startingPage__list-item'>
              <Link className='startingPage__link' to=''>Болезни</Link>
            </li>
          </ul>
        </nav>

      </div>

    </div>
  )
}
