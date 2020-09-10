import React, { useEffect, useState } from 'react';
import Month from '../month/Month';

const Budget = () => {
  const [yearlyBudget, updateYearlyBudget] = useState("Add Budget");
  const [budgetSet, setBudgetStatus] = useState(false);

  useEffect(() => {
  }, []);

  return budgetSet ? (
    <div>
      <h1>Yearly budget: {yearlyBudget}</h1>
      <button onClick={() => updateYearlyBudget(120000)}>Form Value</button>
      <button onClick={() => updateYearlyBudget("Add Budget")}>Set default</button>
      <Month yearlyBudget={yearlyBudget} />
    </div>
  ) : (
    <form>
      <input placeHolder="Add Budget"/>
    </form>
  )
}

export default Budget;