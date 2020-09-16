import React, { useState } from 'react';
import Budget from '../budget/Budget';
import './board.css';

const Board = () => {
  const [yearlyBudget, updateYearlyBudget] = useState("");
  const [budgetSet, setBudgetStatus] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    updateYearlyBudget(value);
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
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