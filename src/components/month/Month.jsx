import React, { useEffect, useState } from 'react';
import year from './year';
import './month.css';

const Month = (props) => {
  const [monthlyBudget, updateMonthlyBudget] = useState(null); 
  
  useEffect(() => {
    updateMonthlyBudget(Math.floor(props.yearlyBudget/12)); // floors down to integer
  }, [props.yearlyBudget])

  return (
      <section className="month__wrapper">
        {year.map(month => <div className="month--section">
          <h2 className="month__name">{month}</h2>
          <p>{monthlyBudget}</p>
        </div>)}
      </section>
    )
}

export default Month;