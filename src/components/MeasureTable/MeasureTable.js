import React from 'react'

export default function MeasureTable({childMeasuresRedux, modifiedData, handleEditButton, handleDeleteBtn}) {
  
  return (
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
               {childMeasuresRedux.map((measure, index) => (
                <tr key={measure.id}>
                  <td className='measure__table-input'>{measure.age}</td>
                  <td className='measure__table-input'>{measure.height}</td>
                  <td className='measure__table-input'>{measure.weight}</td>
                  <td className='measure__table-input measure__table-input_small'>
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
  )
}
