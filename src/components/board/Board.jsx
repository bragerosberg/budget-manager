import React, { useState, useEffect } from 'react';
import Budget from '../budget/Budget';
import Settings from '../settings/Settings';
import './board.css';

const Board = () => {
  const fetchStoredBudget = localStorage.getItem('budget') ? JSON.parse(localStorage.getItem('budget')) : "";
  const [yearlyBudget, updateYearlyBudget] = useState(fetchStoredBudget);
  const [budgetSet, setBudgetStatus] = useState(false);
  const [splitManually, setSplitManually] = useState(false);
  const [bufferMonth, setBudgetMonth] = useState(false);

  useEffect(() => {
    if(fetchStoredBudget!== "") setBudgetStatus(true);
  },[fetchStoredBudget])

  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    updateYearlyBudget(value);
  };

  const changeSplitMethod = () => {
    setSplitManually(!splitManually);
  }

  const changeBufferMonthState = () => {
    setBudgetMonth(!bufferMonth);
  }

  const resetBudget = () => {
    handleSubmit();
    localStorage.clear();
    updateYearlyBudget("");
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if(yearlyBudget !== "") {
      localStorage.setItem('budget', JSON.stringify(yearlyBudget))
      setBudgetStatus(budgetSet => ! budgetSet);
    } else {
      alert('Invalid budget, please enter a valid number');
    }
  };

  return budgetSet ? (
    <section className="budget__wrapper">
      <aside className="budget__header--wrapper">
        <h1 className="budget__header">Budget: {yearlyBudget}</h1>
        <button className="budget__resetbutton" onClick={resetBudget}>X</button>
      </aside>
      <Budget bufferMonth={bufferMonth} splitManually={splitManually} yearlyBudget={yearlyBudget} />
    </section>
  ) : (
    <aside>
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <h1 className="form__header">Enter your budget</h1>
        <input
          type="number"
          name="budget"
          placeholder="Enter yearly budget here"
          onChange={handleChange}
        />
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
      <Settings changeBufferMonthState={changeBufferMonthState} changeSplitMethod={changeSplitMethod}/>
    </aside>
  )
}

export default Board;