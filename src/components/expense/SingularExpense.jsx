import React from 'react';

const SingularExpense = (props) => (
  <div className="month__expenses--entry">
     <p>{props.name}</p>
      <p> - </p>
      <p className="month__expenses--entry--amount">${props.amount}</p>
      <button className="month__expenses--edit" onClick={props.handleEditClick}/>
  </div>
);

export default SingularExpense;