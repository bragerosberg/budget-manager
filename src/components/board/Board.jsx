import React, { useState, useEffect } from 'react';
import Budget from '../budget/Budget';
import './board.css';

const Board = () => {
  const fetchStoredBudget = localStorage.getItem('budget') ? JSON.parse(localStorage.getItem('budget')) : "";
  const [yearlyBudget, updateYearlyBudget] = useState(fetchStoredBudget);
  const [budgetSet, setBudgetStatus] = useState(false);

  useEffect(() => {
    if(fetchStoredBudget!== "") setBudgetStatus(true);
  },[fetchStoredBudget])
  
  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    updateYearlyBudget(value);
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    localStorage.setItem('budget', JSON.stringify(yearlyBudget))
    setBudgetStatus(budgetSet => ! budgetSet);
  };

  return budgetSet ? (
    <section className="budget__wrapper">
      <aside className="budget__header--wrapper">
        <h1 className="budget__header">Budget: {yearlyBudget}</h1>
        <button className="budget__resetbutton" onClick={handleSubmit}>X</button>
      </aside>
      <Budget yearlyBudget={yearlyBudget} />
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
    </aside>
  )
}

export default Board;