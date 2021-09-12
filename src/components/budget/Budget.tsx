import React from 'react';
import Month from '../month/Month';
import year from './year';
import './budget.css';

type BudgetProps = {
  yearlyBudget: number;
};

const Budget = ({ yearlyBudget }: BudgetProps) => {
  const monthlyBudget = Math.floor(yearlyBudget / 12);

  return (
    <section className="month__wrapper">
      {year.slice(0, 12).map(({ month, key }) => (
        <Month key={key} monthlyBudget={monthlyBudget} month={month} />
      ))}
    </section>
  );
};

export default Budget;
