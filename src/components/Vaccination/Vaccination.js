import React, { useState } from "react";
import BlockTitle from "../../shared/BlockTitle/BlockTitle";
import SubmitButton from "../../shared/SubmitButton/SubmitButton";
import {
  addVaccinationInfo,
  deleteVaccinationInfo,
  updateVaccinationDetailsArr,
} from "../../store/vaccinationSlice";
import { useSelector, useDispatch } from "react-redux";
import InfoBlock from "../../shared/InfoBlock/InfoBlock";
const vaccinationDefaultState = {
  date: "",
  vaccinationName: "",
  vaccinationReaction: "",
};

export default function Vaccination() {
  const [modifiedData, setModifiedData] = useState({
    isModified: false,
    index: null,
  });
  
  const vaccination = true;
  const dispatch = useDispatch();
  const [vaccinationInfo, setVaccinationInfo] = useState(
    vaccinationDefaultState
  );
  const { date, vaccinationName, vaccinationReaction } = vaccinationInfo;
  const vaccinationInfoArr = useSelector(
    (state) => state.vaccinationSlice.vaccinationDetails
  );

  const isSubmitBtnActive =
    date.length > 0 &&
    vaccinationName.length > 0 &&
    vaccinationReaction.length > 0;

  function handleInputs(e) {
    const { name, value } = e.target;
    setVaccinationInfo((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (modifiedData.isModified) {
      const modifiedVaccinationInfoArr = [...vaccinationInfoArr];
      modifiedVaccinationInfoArr.splice(modifiedData.index, 1, vaccinationInfo);
      dispatch(updateVaccinationDetailsArr(modifiedVaccinationInfoArr));
      setModifiedData({
        isModified: false,
        measureIndex: null,
      });
    } else {
      dispatch(addVaccinationInfo(vaccinationInfo));
    }
    setVaccinationInfo(vaccinationDefaultState);
  }

  function handleEditBtn(vaccinationCard, index) {
    setVaccinationInfo(vaccinationCard);
    setModifiedData({
      isModified: true,
      index: index,
    });
  }

  function handleDeleteBtn(index) {
    dispatch(deleteVaccinationInfo(index));
  }

  return (
    <div className="vaccination">
      <div className="vaccination__container">
        <BlockTitle title="Прививки" />
        <div className="vaccination__body">
          {vaccinationInfoArr.map((vaccinationObject, index) => (
            <InfoBlock
              handleEditBtn={handleEditBtn}
              handleDeleteBtn={handleDeleteBtn}
              index={index}
              InfoObj={vaccinationObject}
              key={index}
              vaccination={vaccination}
              treatment={false}
              titleName={"Прививка"}
              titleDescription={"Реакция"}
              textName={vaccinationObject.vaccinationName}
              textDescription={vaccinationObject.vaccinationReaction}
            />
          ))}

          <form className="vaccination__form" onSubmit={handleFormSubmit}>
            <div className="vaccination__inputs-container">
              <label className="vaccination__label" htmlFor="vaccinationDate">
                Дата
              </label>
              <input
                value={date}
                name="date"
                onChange={handleInputs}
                className="vaccination__input"
                id="vaccinationDate"
                type="date"
              />
              <label className="vaccination__label" htmlFor="vaccinationName">
                Прививка
              </label>
              <input
                value={vaccinationName}
                name="vaccinationName"
                onChange={handleInputs}
                className="vaccination__input"
                id="vaccinationName"
              />
              <label
                className="vaccination__label"
                htmlFor="illnessDescription"
              >
                Реакция
              </label>
              <textarea
                value={vaccinationReaction}
                name="vaccinationReaction"
                onChange={handleInputs}
                className="vaccination__input vaccination__textarea"
                id="illnessDescription"
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
