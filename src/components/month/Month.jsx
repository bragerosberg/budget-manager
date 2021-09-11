import React, { useState, useEffect } from 'react';
import Expense from '../expense/Expense';
import { uuid } from 'uuidv4';
import Form from '../form/Form';
import './month.css';

const Month = ({ monthlyBudget, month }) => {
  const [remainingMonth, updateMonthlyRemaining] = useState(monthlyBudget);
  const [expenses, setExpenses] = useState([]);
  const [usedMonth, setMonthUsed] = useState(0);

  const [editMonth, editMonthState] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const attemptSavedExpenses = localStorage.getItem(month)
      ? JSON.parse(localStorage.getItem(month))
      : [];
    setExpenses(attemptSavedExpenses);
  }, [month]);

  useEffect(() => {
    updateMonthlyRemaining(monthlyBudget - usedMonth);
  }, [monthlyBudget, usedMonth]);

  useEffect(() => {
    const totalExpenses = expenses.reduce(
      (expenseAcc, currentExpense) =>
        (expenseAcc += parseInt(currentExpense.amount)),
      0
    );
    setMonthUsed(totalExpenses);
    updateMonthlyRemaining(monthlyBudget - totalExpenses);
  }, [monthlyBudget, expenses]);

  const handleName = ({ target: { value } }) => setName(value);

  const handleAmount = ({ target: { value } }) => setAmount(value);

  const deleteExpense = ({ target: { name, id: _id } }) => {
    const actionValidate = window.confirm(
      `Are you sure you wish to delete ${name}?`
    );
    if (actionValidate) {
      setExpenses(expenses.filter(({ id }) => id !== _id));
    }
  };

  const resetExpenseFields = () => {
    setName('');
    setAmount('');
  };

  const addExpense = () => {
    setExpenses([...expenses, { id: uuid(), name, amount }]);
    localStorage.setItem(month, JSON.stringify(expenses));
    resetExpenseFields();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (name !== '' && amount > 0) {
      addExpense();
    } else {
      console.log(
        'Invalid name or amount entered for the expense. Please retry.'
      );
    }
  };

  return editMonth ? (
    <section className="month--section">
      <h2 className="month__name">{month}</h2>

      <aside className="month__expenses">
        <section className="month__expenses--numbers">
          <p className="month__expenses--numbers--header">Budget:</p>
          <p>{monthlyBudget}</p>
          <p className="month__expenses--numbers--header">Remaining:</p>
          <p>{remainingMonth}</p>
          <p className="month__expenses--numbers--header">Used:</p>
          <p>{usedMonth}</p>
        </section>

        <div className="month__expenses--table">
          {expenses.map(({ id, name, amount }) => (
            <Expense
              key={id}
              id={id}
              name={name}
              amount={amount}
              deleteExpense={deleteExpense}
            />
          ))}
        </div>
      </aside>

      <div className="month__buttons">
        <button
          className="month__buttons--goBack"
          onClick={() => editMonthState(!editMonth)}
        />
        <Form
          handleSubmitForm={handleSubmitForm}
          amount={amount}
          name={name}
          handleName={handleName}
          handleAmount={handleAmount}
        />
        <div
          onClick={() => {
            if (
              window.confirm(
                'Are you sure want to delete the whole months expenses?'
              )
            )
              setExpenses([]);
          }}
        >
          <button className="month__buttons--deletebtn" />
        </div>
      </div>
    </section>
  ) : (
    <section className="month--section">
      <h2 className="month__name">{month}</h2>
      <p>
        {usedMonth}/{monthlyBudget}
      </p>
      <button
        className="month__button"
        onClick={() => editMonthState(!editMonth)}
      >
        Add Expenses
      </button>
    </section>
  );
};

export default Month;
