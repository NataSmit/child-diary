import React, {useState} from 'react';
import BlockTitle from '../../shared/BlockTitle/BlockTitle';
import SubmitButton from '../../shared/SubmitButton/SubmitButton';
import {useDispatch, useSelector} from 'react-redux';
import {addEvent, deleteEvent, updateEvents} from '../../store/eventsSlice'
const eventsInfoDefaultState = {
  eventAge: '',
  eventDescription: ''
}

export default function Events() {
  
  const dispatch = useDispatch();
  const events = useSelector(state => state.eventsSlice.events)
  const [modifiedData, setModifiedData] = useState({
    isModified: false,
    index: null
  });
  const [eventsData, setEventsData] = useState(eventsInfoDefaultState)

  const {eventAge, eventDescription} = eventsData;
  const isSubmitBtnActive = eventAge.length > 0 && eventDescription.length > 0;

  function handleInputs(e) {
    const {name, value} = e.target;
    setEventsData((prevState) => ({...prevState, [name]: value}))
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (modifiedData.isModified) {
      const modifiedEvents = [...events];
      modifiedEvents.splice(modifiedData.index, 1, eventsData);
      dispatch(updateEvents(modifiedEvents))
    } else {
      dispatch(addEvent(eventsData))
    }
    setEventsData(eventsInfoDefaultState)
  }

  function handleDeleteBtn(index) {
    dispatch(deleteEvent(index))
  }

  function handleEditBtn(childsEvent, index) {
    setEventsData(childsEvent);
    setModifiedData({
      isModified: true,
      index: index
    })

  }

  return (
    <div className='events'>
      <div className='events__container'>
        <BlockTitle title='События'/>
        <div className='events__body'>

          {
            events.map((event, index) => 
              <div className='events__history' key={index}>
                <button type='button' className='events__edit-btn' onClick={() => handleEditBtn(event, index)} ></button>
                <button type='button' className='events__delete-btn' onClick={() => handleDeleteBtn(index)}></button>
                <div className='events__block'>
                  <p className='events__title'> Возраст:</p>
                  <p className='events__text'>{event.eventAge}</p>
                </div>
                <div className='events__block'>
                  <p className='events__title'> Событие:</p>
                  <p className='events__text'>{event.eventDescription}</p>
                </div>
              </div>
            )
          }
          <form className='events__form' onSubmit={handleFormSubmit}>
            <div className='events__inputs-container'>
              <label className='events__label' htmlFor='eventAge'>Возраст</label>
              <input value={eventAge} onChange={handleInputs} name="eventAge" className='events__input' id='eventAge'/>
              <label className='events__label' htmlFor='eventDescription'>Событие</label>
              <textarea value={eventDescription} onChange={handleInputs} name="eventDescription" className='events__input events__textarea' id='eventDescription'/>
            </div>
            <SubmitButton modifiedData={modifiedData} isSubmitBtnActive={isSubmitBtnActive}/>
          </form>
        </div>
      </div>
    </div>
  )
}
