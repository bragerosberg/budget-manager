import React from 'react';
import './month.css';

const Month = (props) => {
  const clickHandler = () => {
    console.log(`You clicked ${props.id}`);
    console.log(`You clicked ${props.month}`);
  }
  return (
    <section onClick={clickHandler}>
      <h2 className="month__name">{props.month}</h2>
      <p>{props.monthlyBudget}</p>
    </section>
  )
}

export default Month;