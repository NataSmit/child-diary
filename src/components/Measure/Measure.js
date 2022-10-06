import React, { useState } from "react";
import MeasureTable from "../MeasureTable/MeasureTable";
import { useDispatch, useSelector } from "react-redux";
import {
  addMeasure,
  removeMeasure,
  modifyMeasures,
} from "../../store/measureSlice";
import BlockTitle from "../../shared/BlockTitle/BlockTitle";
import SubmitButton from "../../shared/SubmitButton/SubmitButton";

export default function Measure() {
  const dispatch = useDispatch();
  const childMeasuresRedux = useSelector(
    (state) => state.measureSlice.measures
  );

  const [data, setData] = useState({
    age: "",
    height: "",
    weight: "",
    id: Date.now(),
  });

  const { age, height, weight } = data;
  const isSubmitBtnActive =
    age.length > 0 && height.length > 0 && weight.length > 0;

  const [modifiedData, setModifiedData] = useState({
    isModified: false,
    measureIndex: null,
  });

  function handleInputs(e) {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value, id: Date.now() }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (modifiedData.isModified) {
      const modifiedChildMeasures = [...childMeasuresRedux];

      modifiedChildMeasures.splice(modifiedData.measureIndex, 1, data);
      console.log("modifiedChildMeasures", modifiedChildMeasures);
      dispatch(modifyMeasures(modifiedChildMeasures));
      setModifiedData({
        isModified: false,
        measureIndex: null,
      });
    } else {
      dispatch(addMeasure(data));
    }
    setData({
      age: "",
      height: "",
      weight: "",
    });
  }

  function handleEditButton(measure, index) {
    setData(measure);
    setModifiedData({
      isModified: true,
      measureIndex: index,
    });
  }

  function handleDeleteBtn(index) {
    dispatch(removeMeasure());
    setData({
      age: "",
      height: "",
      weight: "",
    });
    setModifiedData({
      isModified: false,
      measureIndex: null,
    });
  }

  return (
    <div className="measure">
      <div className="measure__container">
        <BlockTitle title="Измерения" />
        <div className="measure__wrapper">
          <MeasureTable
            childMeasuresRedux={childMeasuresRedux}
            modifiedData={modifiedData}
            handleEditButton={handleEditButton}
            handleDeleteBtn={handleDeleteBtn}
          />
          <form className="measure__form" onSubmit={handleFormSubmit}>
            <div className="measure__inputs-container">
              <input
                className="measure__input"
                value={age}
                name="age"
                onChange={handleInputs}
                placeholder="Возраст"
              ></input>
              <input
                className="measure__input"
                value={height}
                name="height"
                onChange={handleInputs}
                placeholder="Рост"
              ></input>
              <input
                className="measure__input"
                value={weight}
                name="weight"
                onChange={handleInputs}
                placeholder="Вес"
              ></input>
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
