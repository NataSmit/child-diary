import React from 'react';

export default function InfoBlock({index, InfoObj, handleEditBtn, handleDeleteBtn, textName, 
  textDescription, vaccination, titleName, titleDescription, treatment}) {
  return (
    <div className="infoBlock__history" >
              <button
                type="button"
                className="infoBlock__edit-btn"
                onClick={() => handleEditBtn(InfoObj, index)}
              ></button>
              <button
                type="button"
                className="infoBlock__delete-btn"
                onClick={() => handleDeleteBtn(index)}
              ></button>
              {
                vaccination ? 
                <div className="infoBlock__block">
                  <p className="infoBlock__title"> Дата:</p>
                  <p className="infoBlock__text">{InfoObj.date}</p>
                </div>
                : 
                ''
              }
              <div className="infoBlock__block">
                <p className="infoBlock__title"> {titleName}</p>
                <p className="infoBlock__text">
                  {textName}
                </p>
              </div>
              <div className="infoBlock__block">
                <p className="infoBlock__title"> {titleDescription}</p>
                <p className="infoBlock__text">
                  {textDescription}
                </p>
              </div>
              {
                treatment ?
                <div className="infoBlock__block">
                  <p className="infoBlock__title"> Лечение:</p>
                  <p className="infoBlock__text">
                    {InfoObj.treatment}
                  </p>
               </div>
               : ''
              }
            </div>
  )
}

