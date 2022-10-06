import React from 'react';

export default function SubmitButton(children) {
  return (
    <button disabled={!children.isSubmitBtnActive} className='submit-button'>{children.modifiedData.isModified ? 'Изменить' : 'Сохранить'}</button>
  )
}
