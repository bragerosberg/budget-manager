import React, { useState } from 'react';
import SingularExpense from './SingularExpense';

const Expense = ({ id, name, amount, deleteExpense }) => {
  const [toggleRemove, toggleRemoveStatus] = useState(false);
  const handleEditClick = () => toggleRemoveStatus(!toggleRemove);

  return (
    <>
      <SingularExpense handleEditClick={handleEditClick} name={name} amount={amount}/>
      {toggleRemove && (
        <button 
          className="month__expenses--delete"
          name={name}
          id={id}
          onClick={deleteExpense}
        >
          X
        </button> 
      )}
    </>
  )
}

export default Expense; 