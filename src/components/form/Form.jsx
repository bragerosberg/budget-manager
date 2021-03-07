import React from 'react';

const Form = (props) => {
  const { 
    name,
    handleName,
    amount,
    handleSubmitForm,
    handleAmount
  } = props;

  return (
  <aside> 
    <form>
      <input 
        type="text"
        name="name"
        placeholder="Enter the expense..."
        value={name}
        onChange={handleName}
      />
    </form>

    <form onSubmit={handleSubmitForm}>
      <input 
        type="number" 
        name="amount"
        placeholder="Enter the price..."
        value={amount}
        onChange={handleAmount}
      />
    </form>

  </aside>
  )
}

export default Form;