import React, { useEffect, useState } from 'react';
import Month from '../month/Month';

const Budget = () => {
  const [yearlyBudget, updateYearlyBudget] = useState("");
  const [budgetSet, setBudgetStatus] = useState(false);

  useEffect(() => {
  }, []);

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
    <div>
      {console.log(yearlyBudget)}
      <h1>Yearly budget: {yearlyBudget}</h1>
      <Month yearlyBudget={yearlyBudget} />
      <button onClick={handleSubmit}>Start over</button>
    </div>
  ) : (
    <form className="App" onSubmit={handleSubmit}>
      <h1>Enter your budget</h1>
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