import React, { useState } from 'react';
import SingularExpense from './SingularExpense';

type ExpenseProps = {
  id: string;
  name: string;
  amount: number | string;
  deleteExpense: (target: any) => void;
};

const Expense = ({ id, name, amount, deleteExpense }: ExpenseProps) => {
  const [toggleRemove, toggleRemoveStatus] = useState(false);
  const handleEditClick = () => toggleRemoveStatus(!toggleRemove);

  return (
    <>
      <SingularExpense
        handleEditClick={handleEditClick}
        name={name}
        amount={amount}
      />
      {toggleRemove && (
        <button
          className="month__expenses--delete"
          name={name}
          id={id}
          onClick={({ target }) => deleteExpense(target)}
        >
          X
        </button>
      )}
    </>
  );
};

export default Expense;
