import React from 'react';
import Month from '../month/Month';
import year from './year';
import './budget.css';

const Budget = ({ yearlyBudget }) => {
  const monthlyBudget = Math.floor(yearlyBudget / 12);

  return (
    <section className="month__wrapper">
      {year.slice(0, 12).map(({ month, key }) => (
        <Month key={key} id={key} monthlyBudget={monthlyBudget} month={month} />
      ))}
    </section>
  );
};

export default Budget;
