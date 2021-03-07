import React, { useEffect, useState } from 'react';
import Month from '../month/Month';
import year from './year';
import './budget.css';

const Budget = (props) => {
  const [monthlyBudget, updateMonthlyBudget] = useState();

  useEffect(() => {
    updateMonthlyBudget(Math.floor(props.yearlyBudget/12));
  }, [props.yearlyBudget])

  return (
      <section className="month__wrapper">
        {year.slice(0,12).map(month => (
          <Month key={month.key} id={month.key} monthlyBudget={monthlyBudget} month={month.month}/>    
        ))}
      </section> 
    )
}

export default Budget;