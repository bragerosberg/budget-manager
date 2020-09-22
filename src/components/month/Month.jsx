import React, { useState, useEffect } from 'react';
import Expense from '../expense/Expense';
import { uuid } from 'uuidv4';
import Form from '../form/Form';
import './month.css';

const Month = (props) => {
  const attemptSavedExpenses = localStorage.getItem(props.month) ? JSON.parse(localStorage.getItem(props.month)) : [];

  const [remainingMonth, updateMonthlyRemaining] = useState(props.monthlyBudget);
  const [expenses, setExpenses] = useState(attemptSavedExpenses);
  const [usedMonth, setMonthUsed] = useState(0);

  const [editMonth, editMonthState] = useState(false);
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  useEffect(() => {
    updateMonthlyRemaining(props.monthlyBudget - usedMonth);
  }, [props.monthlyBudget, usedMonth]);

  useEffect(() => {
    const total = expenses.reduce((acc, cur) => acc += parseInt(cur.amount), 0);
    setMonthUsed(total);
    updateMonthlyRemaining(props.monthlyBudget - total);
  }, [props.monthlyBudget, expenses]);

  useEffect(() => {
    localStorage.setItem(props.month, JSON.stringify(expenses))
  }, [props.month, expenses])

  const handleClearExpenses = () => setExpenses([]);

  const editToggle = () => editMonthState(!editMonth);

  const handleName = (e) => setName(e.target.value);
  
  const handleAmount = (e) => setAmount(e.target.value);

  const deleteExpense = (e) => {
    let expenseCopy = expenses;
    expenseCopy = expenseCopy.filter(expense => expense.id !== e.target.id);
    setExpenses(expenseCopy);
  }
  
  const addExpense = () => {
    const id = uuid();
    const expense = { name, amount, id }
    setExpenses([...expenses, expense]);
    setName('');
    setAmount('');
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (name !== '' && amount > 0) {
      addExpense();
    } else {
      console.log('Invalid expense name or the amount')
    }
  }

  return editMonth ? (
    <section className="month--section">
      <h2 className="month__name">{props.month}</h2>
      
      <aside className="month__expenses">

        <section className="month__expenses--numbers">
            <p className="month__expenses--numbers--header">Budget:</p> 
            <p>{props.monthlyBudget}</p>
            <p className="month__expenses--numbers--header">Remaining:</p>
            <p>{remainingMonth}</p>
            <p className="month__expenses--numbers--header">Used:</p> 
            <p>{usedMonth}</p>
        </section>

        <div className="month__expenses--table">
          {expenses.map(exp => (
            <Expense key={exp.id} deleteExpense={deleteExpense} exp={exp}/>
          ))}
        </div>

      </aside>

      <div className="month__buttons">
        <button className="month__buttons--goBack" onClick={editToggle}/>
        <Form 
          handleSubmitForm={handleSubmitForm}
          amount={amount}
          name={name}
          handleName={handleName}
          handleAmount={handleAmount}
        />
        <button className="month__buttons--deletebtn" onClick={handleClearExpenses}/>
      </div>

    </section>
  ) : (
    <section className="month--section">
      <h2 className="month__name">{props.month}</h2>
      <p>{usedMonth}/{props.monthlyBudget}</p>
      <button className="month__button" onClick={editToggle}>Add Expenses</button>
    </section>
  )
}

export default Month;