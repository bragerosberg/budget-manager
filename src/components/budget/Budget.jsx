import React, { useEffect, useState } from 'react';
import Month from '../month/Month';
import './budget.css';

const Budget = () => {
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
      {console.log(yearlyBudget)}
      <h1>Budget: {yearlyBudget} kr</h1>
      <Month yearlyBudget={yearlyBudget} />
      <button className="budget__resetbutton" onClick={handleSubmit}>Start over</button>
    </section>
  ) : (
    <form className="form__wrapper" onSubmit={handleSubmit}>
      <h1 className="form__header">Enter your budget</h1>
      <input
        type="number"
        name="budget"
        placeholder="Enter budget here"
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default Budget;