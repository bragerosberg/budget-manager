import React, { useState } from 'react';
import SingularExpense from './SingularExpense';

const Expense = (props) => {
  const [toggleRemove, toggleRemoveStatus] = useState(false);
  const handleEditClick = () => toggleRemoveStatus(!toggleRemove);
  const { name, id, amount } = props.exp;

  return toggleRemove ? (
    <>
      <SingularExpense handleEditClick={handleEditClick} name={name} amount={amount}/>
      <button 
        className="month__expenses--delete"
        name={name}
        id={id}
        onClick={props.deleteExpense}
      >
        X
      </button>  
    </>
  ) : (
    <SingularExpense handleEditClick={handleEditClick} name={name} amount={amount}/>
  )
}

export default Expense; 