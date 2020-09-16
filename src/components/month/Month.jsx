import React, { useState, useEffect } from 'react';
import './month.css';

const Month = (props) => {
  const [editMonth, editMonthState] = useState(false);
  const [usedMonth, setMonthUsed] = useState(0);
  const [remainingMonth, updateMonthlyRemaining] = useState(props.monthlyBudget);
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  useEffect(() => {
    updateMonthlyRemaining(props.monthlyBudget - usedMonth);
  }, [props.monthlyBudget]);

  useEffect(() => {
    const total = expenses.reduce((accumulator, currentValue) => accumulator += parseInt(currentValue.amount), 0);
    setMonthUsed(total);
  }, [expenses]);

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

  const handleSubmitForm = event => {
    event.preventDefault()
    if (name !== '' && amount > 0) {
      const expense = { name, amount }
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
        <p>Budget: {props.monthlyBudget}</p>
        <p>Remaining: {remainingMonth}</p>
        <p>Used: {usedMonth}</p>
        <div className="month__expenses--table">
          {expenses.map(exp => (
            <>
              <p className="month__expenses--table__name">{exp.name}</p>
              <p className="month__expenses--table__amount">{exp.amount}</p>
            </>
          ))}
          <button onClick={handleClearExpenses}>Clear Expenses</button>
        </div>
        <div>
          <form>
            <input type="text" name="name" placeholder="Name of expense" value={name} onChange={handleName}/>
          </form>
          <form onSubmit={handleSubmitForm}>
            <input type="number" name="amount" placeholder="0.00" value={amount} onChange={handleAmount}/>
          </form>
        </div>
      </aside>
    </section>
  ) : (
    <section className="month--section">
      <h2 className="month__name">{props.month}</h2>
      <p>{props.monthlyBudget}</p>
      <button onClick={clickHandler}>Add expenses</button>
    </section>
  )
}

export default Month;