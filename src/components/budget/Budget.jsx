import React, { useEffect, useState } from 'react';
import Month from '../month/Month';
import year from './year';
import './budget.css';

const Budget = (props) => {
  const [monthlyBudget, updateMonthlyBudget] = useState(null);
  const [updateManually, setManual] = useState(false);
  const [bufferMonth, setBufferState] = useState(false);
  
  useEffect(() => {
    if(props.splitManually) {
      setManual(props.splitManually);
    } else {
      updateMonthlyBudget(Math.floor(props.yearlyBudget/12));
    }
  }, [props.yearlyBudget, props.splitManually])

  return updateManually ? (
    <p>Placeholder</p>
    ) : (
      <section className="month__wrapper">
        {year.map(month => (
          <Month key={month.key} id={month.key} monthlyBudget={monthlyBudget} month={month.month}/>    
        ))}
      </section> 
    )
}

export default Budget;