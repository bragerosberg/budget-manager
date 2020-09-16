import React from 'react';

const Expense = (props) => {
  return (
    <div className="month__expenses--table__entry">
      <p>{props.exp.name}</p>
      <p> - </p>
      <p className="">${props.exp.amount}</p>
      <button id={props.exp.id} onClick={props.deleteExp}>X</button>  
    </div>
  )
}

export default Expense; 