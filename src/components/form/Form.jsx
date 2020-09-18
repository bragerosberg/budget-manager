import React from 'react';

const Form = (props) => {
  return (
  <aside> 
    <form>
      <input type="text" name="name" placeholder="Enter the expense..." value={props.name} onChange={props.handleName}/>
    </form>
    <form onSubmit={props.handleSubmitForm}>
      <input type="number" name="amount" placeholder="Enter the price..." value={props.amount} onChange={props.handleAmount}/>
    </form>
  </aside>
  )
}

export default Form;