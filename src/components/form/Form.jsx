import React from 'react';

const Form = (props) => {
  return (
  <div> 
    <form>
      <input type="text" name="name" placeholder="Name of expense" value={props.name} onChange={props.handleName}/>
    </form>
    <form onSubmit={props.handleSubmitForm}>
      <input type="number" name="amount" placeholder="0.00" value={props.amount} onChange={props.handleAmount}/>
    </form>
  </div>
  )
}

export default Form;