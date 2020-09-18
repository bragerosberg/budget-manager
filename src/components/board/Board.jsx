import React, { useState, useEffect } from 'react';
import Budget from '../budget/Budget';
import Settings from '../settings/Settings';
import './board.css';

const Board = () => {
  const attemptSavedBudget  = localStorage.getItem('budget') ? JSON.parse(localStorage.getItem('budget')) : "";
  const [yearlyBudget, updateYearlyBudget] = useState(attemptSavedBudget );

  const [budgetSet, setBudgetStatus] = useState(false);

  const [splitManually, setSplitManually] = useState(false);
  const [bufferMonth, setBudgetMonth] = useState(false);

  useEffect(() => {
    if(attemptSavedBudget !== "") setBudgetStatus(true);
  }, [attemptSavedBudget ])

  const handleChange = (e) => {
    const { target } = e;
    const { value } = target;
    updateYearlyBudget(value);
  };

  const changeSplitMethod = () => setSplitManually(!splitManually);

  const changeBufferMonthState = () => setBudgetMonth(!bufferMonth);

  const resetBudget = () => {
    handleSubmit();
    localStorage.clear();
    updateYearlyBudget("");
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
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
        <h1 className="budget__header">Total: {yearlyBudget}</h1>
        <button className="budget__resetbutton" onClick={resetBudget}>X</button>
      </aside>
      <Budget bufferMonth={bufferMonth} splitManually={splitManually} yearlyBudget={yearlyBudget} />
    </section>
  ) : (
    <aside>
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <h1 className="form__header">Budget Planner</h1>
        <input type="number" name="budget" placeholder="Enter yearly budget here" className="form__input" onChange={handleChange}/>
        <button className="form__button" type="submit">Submit</button>
      </form>
      <Settings changeBufferMonthState={changeBufferMonthState} changeSplitMethod={changeSplitMethod}/>
    </aside>
  )
}

export default Board;