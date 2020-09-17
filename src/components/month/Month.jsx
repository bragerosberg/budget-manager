import React, { useState, useEffect } from 'react';
import Expense from '../expense/Expense';
import { uuid } from 'uuidv4';
import Form from '../form/Form';
import './month.css';

const Month = (props) => {
  const allExpenses = localStorage.getItem(props.month) ? JSON.parse(localStorage.getItem(props.month)) : [];

  const [editMonth, editMonthState] = useState(false);
  const [usedMonth, setMonthUsed] = useState(0);
  const [remainingMonth, updateMonthlyRemaining] = useState(props.monthlyBudget);
  const [expenses, setExpenses] = useState(allExpenses);
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  useEffect(() => {
    updateMonthlyRemaining(props.monthlyBudget - usedMonth);
  }, [props.monthlyBudget, usedMonth]);

  useEffect(() => {
    const total = expenses.reduce((accumulator, currentValue) => accumulator += parseInt(currentValue.amount), 0);
    setMonthUsed(total);
    updateMonthlyRemaining(props.monthlyBudget - total);
  }, [props.monthlyBudget, expenses]);

  useEffect(() => {
    localStorage.setItem(props.month, JSON.stringify(expenses))
  }, [props.month, expenses])

  const handleClearExpenses = () => {
    setExpenses([]);
  }

  const clickHandler = () => {
    editMonthState(!editMonth);
  }

  const handleName = event => {
    setName(event.target.value)
  }
  
  const handleAmount = event => {
    setAmount(event.target.value)
  }

  const deleteExp = (e) => {
    let exps = expenses;
    exps = exps.filter(exp => exp.id !== e.target.id);
    setExpenses(exps);
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    if (name !== '' && amount > 0) {
      const id = uuid();
      const expense = { name, amount, id }
      setExpenses([...expenses, expense])
      setName('')
      setAmount('')
    } else {
      console.log('Invalid expense name or the amount')
    }
  }

  return editMonth ? (
    <section className="month--section">
      <h2 className="month__name">{props.month}</h2>
      <aside className="month__expenses">
        <section className="month__expenses--numbers">
          <>
            <p className="month__expenses--numbers--header">Budget:</p> 
            <p>{props.monthlyBudget}</p>
          </>
            <p className="month__expenses--numbers--header">Remaining:</p>
            <p>{remainingMonth}</p>
          <>
          </>
          <>
            <p className="month__expenses--numbers--header">Used:</p> 
            <p>{usedMonth}</p>
          </>
        </section>
        <div className="month__expenses--table">
          {expenses.map(exp => (
            <Expense deleteExp={deleteExp} exp={exp}/>
          ))}
        </div>
      </aside>
      <div className="month__buttons">
        <button className="month__buttons--goBack" onClick={clickHandler}/>
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
      <button className="btn btn-success" onClick={clickHandler}>Edit Month</button>
    </section>
  )
}

export default Month;