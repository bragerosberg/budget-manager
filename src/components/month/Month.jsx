import React, { useEffect, useState } from 'react';
import year from './year';


const Month = (props) => {
  const [monthlyBudget, updateMonthlyBudget] = useState(null); 
  
  useEffect(() => {
    updateMonthlyBudget(Math.floor(props.yearlyBudget/12));
  }, [props.yearlyBudget])

  return (
      <section>
        {year.map(month => <p>{month} = {monthlyBudget}</p>)}
      </section>
    )
}

export default Month;