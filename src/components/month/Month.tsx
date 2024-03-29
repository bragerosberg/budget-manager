import React, { useState, useEffect } from 'react';
import Expense from '../expense/Expense';
import { uuid } from 'uuidv4';
import Form from '../form/Form';
import './month.css';

type MonthProps = {
  monthlyBudget: number;
  month: string;
};

type Expense = {
  id: string;
  name: string;
  amount: number;
};

const Month = ({ monthlyBudget, month }: MonthProps) => {
  const [remainingMonth, updateMonthlyRemaining] = useState(monthlyBudget);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [usedMonth, setMonthUsed] = useState(0);

  const [editMonth, editMonthState] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    const attemptSavedExpenses = localStorage.getItem(month)
      ? JSON.parse(localStorage.getItem(month) || '')
      : [];
    setExpenses(attemptSavedExpenses);
  }, [month]);

  useEffect(() => {
    updateMonthlyRemaining(monthlyBudget - usedMonth);
  }, [monthlyBudget, usedMonth]);

  useEffect(() => {
    const totalExpenses = expenses.reduce(
      (acc, cval) => (acc += +cval.amount),
      0
    );
    setMonthUsed(totalExpenses);
    updateMonthlyRemaining(monthlyBudget - totalExpenses);
  }, [monthlyBudget, expenses]);

  const handleName = ({ target: { value } }: any) => setName(value);

  const handleAmount = ({ target: { value } }: any) => setAmount(value);

  const deleteExpense = ({ id: clickedId }: { id: string }) => {
    const actionValidate = window.confirm(
      `Are you sure you wish to delete ${name}?`
    );
    if (actionValidate) {
      setExpenses(
        expenses.filter(({ id: expenseId }) => expenseId !== clickedId)
      );
    }
  };

  const resetExpenseFields = () => {
    setName('');
    setAmount(0);
  };

  const addExpense = () => {
    setExpenses([...expenses, { id: uuid(), name, amount }]);
    localStorage.setItem(month, JSON.stringify(expenses));
    resetExpenseFields();
  };

  const handleSubmitForm = (e?: any) => {
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
