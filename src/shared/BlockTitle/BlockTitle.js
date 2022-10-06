import React from 'react';
import {Link} from 'react-router-dom';

export default function Blocktitle({title}) {
  return (
    <header className='block__header'>
      <h1 className='block__title'>{title}</h1>
      <Link className='block__link' to='/'>На главную</Link>
    </header>
  )
}
