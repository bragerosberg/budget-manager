import React, { useEffect, useState } from 'react';
import Month from '../month/Month';
import year from './year';
import './budget.css';

const Budget = (props) => {
  const [monthlyBudget, updateMonthlyBudget] = useState(null); 
  
  useEffect(() => {
    updateMonthlyBudget(Math.floor(props.yearlyBudget/12));
  }, [props.yearlyBudget])

  return (
      <section className="month__wrapper">
        {year.map(month => (
          <Month monthlyBudget={monthlyBudget} month={month}/>    
        ))}
      </section>
    )
}

export default Budget;