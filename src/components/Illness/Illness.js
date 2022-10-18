import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlockTitle from "../../shared/BlockTitle/BlockTitle";
import SubmitButton from "../../shared/SubmitButton/SubmitButton";
import {
  addIllness,
  deleteIllness,
  updateIllnessList,
} from "../../store/illnessSlice";
import InfoBlock from "../../shared/InfoBlock/InfoBlock";

const illnessDefault = {
  name: "",
  description: "",
  treatment: "",
};

export default function Illness() {
  const illnessList = useSelector((state) => state.illnessSlice.illnessList);
  const [modifiedData, setModifiedData] = useState({
    isModified: false,
    index: null,
  });
  const dispatch = useDispatch();
  const vaccination = false;
  const [illnessDetails, setIllnessDetails] = useState(illnessDefault);
  const { name, description, treatment } = illnessDetails;
  const isSubmitBtnActive =
    name.length > 0 && description.length > 0 && treatment.length > 0;

  function handleInputChange(e) {
    const { name, value } = e.target;
    setIllnessDetails((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (modifiedData.isModified) {
      const modifiedIllnessList = [...illnessList];
      modifiedIllnessList.splice(modifiedData.index, 1, illnessDetails);
      dispatch(updateIllnessList(modifiedIllnessList));
      setModifiedData({
        isModified: false,
        index: null,
      });
    } else {
      dispatch(addIllness(illnessDetails));
    }

    setIllnessDetails(illnessDefault);
  }

  function handleEditBtn(illnessObject, index) {
    setIllnessDetails(illnessObject);
    setModifiedData({
      isModified: true,
      index: index,
    });
  }

  function handleDeleteBtn(index) {
    dispatch(deleteIllness(index));
  }

  return (
    <div className="illness">
      <div className="illness__container">
        <BlockTitle title="Болезни" />
        <div className="illness__body">
          {illnessList.map((illness, index) => (
            <InfoBlock
              handleEditBtn={handleEditBtn}
              handleDeleteBtn={handleDeleteBtn}
              InfoObj={illness}
              index={index}
              key={index}
              vaccination={vaccination}
              treatment={true}
              titleName={"Болезнь"}
              titleDescription={"Описание"}
              textName={illness.name}
              textDescription={illness.description}
            />
          ))}
          <form className="illness__form" onSubmit={handleFormSubmit}>
            <div className="illness__inputs-container">
              <label className="illness__label" htmlFor="illnessName">
                Болезнь
              </label>
              <input
                className="illness__input"
                id="illnessName"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <label className="illness__label" htmlFor="illnessDescription">
                Описание
              </label>
              <textarea
                className="illness__input illness__textarea"
                id="illnessDescription"
                placeholder="Дата, симптомы..."
                name="description"
                value={description}
                onChange={handleInputChange}
              />
              <label className="illness__label" htmlFor="illnessTreatment">
                Лечение
              </label>
              <textarea
                className="illness__input illness__textarea"
                id="illnessTreatment"
                name="treatment"
                value={treatment}
                onChange={handleInputChange}
              />
            </div>
            <SubmitButton
              modifiedData={modifiedData}
              isSubmitBtnActive={isSubmitBtnActive}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
