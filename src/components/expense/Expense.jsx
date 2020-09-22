import React, { useState } from 'react';

const Expense = (props) => {
  const [toggleRemove, toggleRemoveStatus] = useState(false);
  const handleEditClick = () => toggleRemoveStatus(!toggleRemove);

  return toggleRemove ? (
    <div className="month__expenses--entry">
      <p>{props.exp.name}</p>
      <p> - </p>
      <p className="month__expenses--entry--amount">${props.exp.amount}</p>
      <button className="month__expenses--edit" onClick={handleEditClick}/>
      <button className="month__expenses--delete" id={props.exp.id} onClick={props.deleteExpense}>X</button>  
    </div>
  ) : (
    <div className="month__expenses--entry">
      <p>{props.exp.name}</p>
      <p> - </p>
      <p className="month__expenses--entry--amount">${props.exp.amount}</p>
      <button className="month__expenses--edit" onClick={handleEditClick}/>
    </div>
  )
}

export default Expense; 