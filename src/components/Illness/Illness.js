import React from 'react';
import BlockTitle from '../../shared/BlockTitle/BlockTitle'
import SubmitButton from '../../shared/SubmitButton/SubmitButton';

export default function Illness() {

  const modifiedData = {}
 const isSubmitBtnActive = true
  return (
    <div className='illness'>
      <div className='illness__container'>
        <BlockTitle title='Болезни'/>
        <div className='illness__body'>
          <form className='illness__form'>
            <div className='illness__inputs-container'>
              <label className='illness__label' htmlFor='illnessName'>Болезнь</label>
              <input className='illness__input' id='illnessName' />
              <label className='illness__label' htmlFor='illnessDescription'>Описание</label>
              <textarea className='illness__input illness__textarea' id='illnessDescription' placeholder='Дата, симптомы...'/>
              <label className='illness__label' htmlFor='illnessTreatment'>Лечение</label>
              <textarea className='illness__input illness__textarea' id='illnessTreatment' />
            </div>
              <SubmitButton modifiedData={modifiedData} isSubmitBtnActive={isSubmitBtnActive}/>
          </form>
        </div>
        
      </div>

    </div>
  )
}
