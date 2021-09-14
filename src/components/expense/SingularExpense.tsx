import React from 'react';

type SingularExpenseProps = {
  name: string;
  amount: number;
  handleEditClick: () => void;
};

const SingularExpense = ({
  name,
  amount,
  handleEditClick,
}: SingularExpenseProps) => (
  <div className="month__expenses--entry">
    <p>{name}</p>
    <p> - </p>
    <p className="month__expenses--entry--amount">${amount}</p>
    <button className="month__expenses--edit" onClick={handleEditClick} />
  </div>
);

export default SingularExpense;
