import React, { useEffect, useState } from 'react';
import Month from '../month/Month';
import Buffer from '../month/buffer/Buffer';
import year from './year';
import './budget.css';

const Budget = (props) => {
  const [monthlyBudget, updateMonthlyBudget] = useState(null);
  const [updateManually, setManual] = useState(false);
  const [bufferMonth, setBufferState] = useState(false);

  // Updates setting booleans
  useEffect(() => {
    setManual(props.splitManually);
    setBufferState(props.bufferMonth);
  }, [props.splitManually, props.bufferMonth])
  
  useEffect(() => {
    if(props.bufferMonth) { 
      updateMonthlyBudget(Math.floor(props.yearlyBudget/13));
    } else {
      updateMonthlyBudget(Math.floor(props.yearlyBudget/12));
    }
  }, [props.yearlyBudget, props.bufferMonth])

  return bufferMonth ? (
      <section className="month__wrapper">
        {year.map(month => (
          <Month key={month.key} id={month.key} monthlyBudget={monthlyBudget} month={month.month}/>    
        ))}
      </section> 
    ) : (
      <section className="month__wrapper">
        {year.slice(0,12).map(month => (
          <Month key={month.key} id={month.key} monthlyBudget={monthlyBudget} month={month.month}/>    
        ))}
      </section> 
    )
}

export default Budget;