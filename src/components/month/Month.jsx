import React, { useState, useEffect } from 'react';
import './month.css';

const Month = (props) => {
  const [editMonth, editMonthState] = useState(false);
  const [usedMonth, setMonthUsed] = useState(null);
  const [remainingMonth, updateMonthlyRemaining] = useState(0);

  useEffect(() => {
    updateMonthlyRemaining(props.monthlyBudget);
  }, [editMonth]);

  const clickHandler = () => {
    editMonthState(!editMonth);
  }

  const subtractTester = () => {
    updateMonthlyRemaining(remainingMonth - 1000);
    setMonthUsed(usedMonth + 1000);
  }


  return editMonth ? (
    <section className="month--section">
      <h2 className="month__name">{props.month}</h2>
      <p>{props.monthlyBudget}</p>
      <p>Used {usedMonth}</p>
      <p>Remaining {remainingMonth}</p>
      <button onClick={subtractTester}>Use 1k</button>
      <button onClick={clickHandler}>Toggle</button>
    </section>
  ) : (
    <section className="month--section">
      <h2 className="month__name">{props.month}</h2>
      <p>{props.monthlyBudget}</p>
      <button onClick={clickHandler}>Toggle</button>
    </section>
  )
}

export default Month;