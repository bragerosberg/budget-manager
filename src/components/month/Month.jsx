import React, { useState, useEffect } from 'react';
import Expense from '../expense/Expense';
import { uuid } from 'uuidv4';
import Form from '../form/Form';
import './month.css';

const Month = (props) => {
  const { monthlyBudget, month } = props;
  const attemptSavedExpenses = localStorage.getItem(month) ? JSON.parse(localStorage.getItem(month)) : [];

  const [remainingMonth, updateMonthlyRemaining] = useState(monthlyBudget);
  const [expenses, setExpenses] = useState(attemptSavedExpenses);
  const [usedMonth, setMonthUsed] = useState(0);

  const [editMonth, editMonthState] = useState(false);
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  
  useEffect(() => {
    updateMonthlyRemaining(monthlyBudget - usedMonth);
  }, [monthlyBudget, usedMonth]);

  useEffect(() => {
    const total = expenses.reduce((acc, cur) => acc += parseInt(cur.amount), 0);
    setMonthUsed(total);
    updateMonthlyRemaining(monthlyBudget - total);
  }, [monthlyBudget, expenses]);

  useEffect(() => {
    localStorage.setItem(month, JSON.stringify(expenses))
  }, [month, expenses])

  const handleName = (e) => setName(e.target.value);
  
  const handleAmount = (e) => setAmount(e.target.value);

  const deleteExpense = (e) => {
    const validation = window.confirm(`Are you sure you wish to delete ${e.target.name}?`);
    if(validation) {
      const updatedExpenses = expenses.filter(expense => expense.id !== e.target.id);
      setExpenses(updatedExpenses);
    }
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
          {expenses.map(exp => (
            <Expense key={exp.id} deleteExpense={deleteExpense} exp={exp}/>
          ))}
        </div>

      </aside>

      <div className="month__buttons">
        <button className="month__buttons--goBack" onClick={() => editMonthState(!editMonth)}/>
        <Form 
          handleSubmitForm={handleSubmitForm}
          amount={amount}
          name={name}
          handleName={handleName}
          handleAmount={handleAmount}
        />
        <div onClick={() => { if (window.confirm('Are you sure want to delete the whole months expenses?')) setExpenses([]) } }>
          <button className="month__buttons--deletebtn"/>
        </div>
      </div>

    </section>
  ) : (
    <section className="month--section">
      <h2 className="month__name">{month}</h2>
      <p>{usedMonth}/{monthlyBudget}</p>
      <button className="month__button" onClick={() => editMonthState(!editMonth)}>Add Expenses</button>
    </section>
  )
}

export default Month;