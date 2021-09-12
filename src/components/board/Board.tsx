import React, { useState, useEffect } from 'react';
import Budget from '../budget/Budget';
import './board.css';

const Board = () => {
  const [yearlyBudget, updateYearlyBudget] = useState<number>(0);
  const [budgetSet, setBudgetStatus] = useState(false);

  useEffect(() => {
    const attemptSavedBudget = localStorage.getItem('budget')
      ? JSON.parse(localStorage.getItem('budget')!)
      : 0;
    if (attemptSavedBudget > 0) setBudgetStatus(true);
    updateYearlyBudget(attemptSavedBudget);
  }, []);

  const handleChange = ({ target }: any) => {
    const { value } = target;
    updateYearlyBudget(value);
  };

  const resetBudget = () => {
    handleSubmit();
    localStorage.clear();
    updateYearlyBudget(0);
  };

  const handleSubmit = (e?: any) => {
    if (e) e.preventDefault();
    if (yearlyBudget > 1) {
      localStorage.setItem('budget', JSON.stringify(yearlyBudget));
      setBudgetStatus((budgetSet) => !budgetSet);
    }
  };

  return (
    <>
      {budgetSet && (
        <section className="budget__wrapper">
          <aside className="budget__header--wrapper">
            <h1 className="budget__header">Yearly: {yearlyBudget}</h1>
            <div
              onClick={() => {
                if (
                  window.confirm('Are you sure you wish to restart the budget?')
                )
                  resetBudget();
              }}
            >
              <button className="budget__resetbutton">X</button>
            </div>
          </aside>
          <Budget yearlyBudget={yearlyBudget} />
        </section>
      )}
      {!budgetSet && (
        <aside>
          <form className="form__wrapper" onSubmit={handleSubmit}>
            <h1 className="form__header">Budget Manager</h1>
            <input
              type="number"
              name="budget"
              placeholder="Enter yearly budget here"
              className="form__input"
              onChange={handleChange}
            />
            <button className="form__button" type="submit">
              Submit
            </button>
          </form>
        </aside>
      )}
    </>
  );
};

export default Board;
