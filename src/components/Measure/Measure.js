import React, {useState} from 'react';
import { useForm } from "react-hook-form";


export default function Measure() {
  
  const [data, setData] = useState({
    age: '',
    height: '',
    weight: ''
  })

  const [childMeasures, setChildMeasures] = useState([])

  const {age, height, weight} = data
  const [modifiedData, setModifiedData] = useState({
    isModified: false,
    measureIndex: null
  })
  console.log('data:', data)

  function handleInputs(e) {
    const {name, value} = e.target
    setData((prevState) =>({...prevState, [name]: value}))
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    if (modifiedData.isModified) {
      const modifiedChildMeasures = childMeasures;
      modifiedChildMeasures.splice(modifiedData.measureIndex, 1, data)
      console.log('modifiedChildMeasures', modifiedChildMeasures)
      setChildMeasures(modifiedChildMeasures)
      //console.log('childMeasures in submit', childMeasures)
      setModifiedData({
        isModified: false,
        measureIndex: null
      })
    } else {
      setChildMeasures((prevState) => [...prevState, data]) 
    }
    setData({
      age: '',
      height: '',
      weight: ''
    })
  }

  function handleEditButton(measure, index) {
    setData(measure);
    setModifiedData({
      isModified: true,
      measureIndex: index
    })
    
  }

  function handleDeleteBtn(index) {
    setChildMeasures((state) => state.filter((measure, measureIndex) => measureIndex !== index));
    setData({
      age: '',
      height: '',
      weight: ''
    })
    setModifiedData({
      isModified: false,
      measureIndex: null
    })
  }
  console.log('childMeasure:', childMeasures)


  return (
    <div className='measure'>
      <div className='measure__container'>
        <h1 className='measure__title'>Измерения</h1>
        <div className='measure__wrapper'>
          <table className='measure__table'>
            <thead>
              <tr>
                <th className='measure__table-title'>Возраст</th>
                <th className='measure__table-title'>Рост</th>
                <th className='measure__table-title'>Вес</th>
                <th className='measure__table-title measure__table-title_small'></th>
              </tr>
            </thead>
            <tbody>
               {childMeasures.map((measure, index) => (
                <tr>
                  <td className='measure__table-input'>{measure.age}</td>
                  <td className='measure__table-input'>{measure.height}</td>
                  <td className='measure__table-input'>{measure.weight}</td>
                  <td className='measure__table-input'>
                    {
                      modifiedData.isModified ? 
                      <button className='measure__delete-btn' type='button' onClick={()=> handleDeleteBtn(index)}></button> :
                      <button className='measure__table-edit' type='button' onClick={() => handleEditButton(measure, index)}></button>
                    }
                    
            
                  </td>
                </tr>
               ))}
            </tbody>
          </table>
          <form className='measure__form' onSubmit={handleFormSubmit}>
            <input className='measure__input' value={age} name='age' onChange={handleInputs}></input>
            <input className='measure__input' value={height} name='height' onChange={handleInputs}></input>
            <input className='measure__input' value={weight} name='weight' onChange={handleInputs}></input>
            <button className='measure__submit-btn'>{modifiedData.isModified ? 'Изменить' : 'Сохранить'}</button>
            
          </form>
        </div>
      </div>

    </div>
  )
}
