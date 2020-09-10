import React, { useEffect, useState } from 'react';
import year from './year';


const Month = (props) => {
  const [monthlyBudget, updateMonthlyBudget] = useState(null); 

  useEffect(() => {
    if(Number.isInteger(props.yearlyBudget)) {
      updateMonthlyBudget(props.yearlyBudget/12);
    }
  }, [props.yearlyBudget])

  return Number.isInteger(props.yearlyBudget) ? 
    (
      <section>
        {year.map(month => <p>{month} = {monthlyBudget}</p>)}
      </section>
    ) : (
      <section>
        <p>Enter a yearly budget to continue</p>
      </section>
  )
}

export default Month;