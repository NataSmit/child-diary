import React, {useState} from 'react';
import BlockTitle from '../../shared/BlockTitle/BlockTitle';
import SubmitButton from '../../shared/SubmitButton/SubmitButton';
import {addVaccinationInfo, deleteVaccinationInfo, updateVaccinationDetailsArr} from '../../store/vaccinationSlice';
import {useSelector, useDispatch} from 'react-redux';
const vaccinationDefaultState = {
  date: '',
  vaccinationName: '',
  vaccinationReaction: ''
}

export default function Vaccination() {
  const [modifiedData, setModifiedData] = useState({
    isModified: false,
    index: null
  })
 
  const dispatch = useDispatch()
  const [vaccinationInfo, setVaccinationInfo] = useState(vaccinationDefaultState)
  const {date, vaccinationName, vaccinationReaction} = vaccinationInfo;
  const vaccinationInfoArr = useSelector(state => state.vaccinationSlice.vaccinationDetails)
  
  const isSubmitBtnActive = date.length > 0 && vaccinationName.length > 0 && vaccinationReaction.length > 0

  function handleInputs(e) {
    const {name, value} = e.target
    setVaccinationInfo((prevState) => ({...prevState, [name]: value}))
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (modifiedData.isModified) {
      const modifiedVaccinationInfoArr = [...vaccinationInfoArr];
      modifiedVaccinationInfoArr.splice(modifiedData.index, 1, vaccinationInfo)
      dispatch(updateVaccinationDetailsArr(modifiedVaccinationInfoArr))
    } else {
      dispatch(addVaccinationInfo(vaccinationInfo))
      
    }
    setVaccinationInfo(vaccinationDefaultState)
  }

  function handleEditBtn(vaccinationCard, index) {
    console.log('vaccinationCard', vaccinationCard)
    setVaccinationInfo(vaccinationCard)
    setModifiedData({
      isModified: true,
      index: index
    })
  }

  function handleDeleteBtn(index) {
    dispatch(deleteVaccinationInfo(index))
  }

  return (
    
    <div className='vaccination'>
      <div className='vaccination__container'>
        <BlockTitle title='Прививки'/>
        <div className='vaccination__body'>
         {
          vaccinationInfoArr.map((vaccinationObject, index) => 
            <div className='vaccination__history' key={index}>
              <button type='button' className='vaccination__edit-btn' onClick={() => handleEditBtn(vaccinationObject, index)}></button>
              <button type='button' className='vaccination__delete-btn' onClick={() => handleDeleteBtn(index)}></button>
              <div className='vaccination__block'>
                <p className='vaccination__title'> Дата:</p>
                <p className='vaccination__text'>{vaccinationObject.date}</p>
              </div>
              <div className='vaccination__block'>
                <p className='vaccination__title'> Прививка:</p>
                <p className='vaccination__text'>{vaccinationObject.vaccinationName}</p>
              </div>
              <div className='vaccination__block'>
                <p className='vaccination__title'> Реакция:</p>
                <p className='vaccination__text'>{vaccinationObject.vaccinationReaction}</p>
              </div>
            </div>
            )
         }
          
          <form className='vaccination__form' onSubmit={handleFormSubmit}>
            <div className='vaccination__inputs-container'>
              <label className='vaccination__label' htmlFor='vaccinationDate'>Дата</label>
              <input value={date} name="date" onChange={handleInputs} className='vaccination__input' id='vaccinationDate' type="date"/>
              <label className='vaccination__label' htmlFor='vaccinationName'>Прививка</label>
              <input value={vaccinationName} name="vaccinationName" onChange={handleInputs} className='vaccination__input' id='vaccinationName' />
              <label className='vaccination__label' htmlFor='illnessDescription'>Реакция</label>
              <textarea value={vaccinationReaction} name="vaccinationReaction" onChange={handleInputs} className='vaccination__input vaccination__textarea' id='illnessDescription'/>
            </div>
            <SubmitButton modifiedData={modifiedData} isSubmitBtnActive={isSubmitBtnActive}/>
          </form>
        </div>
      </div>
      
    </div>
  )
}
