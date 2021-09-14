import React from 'react';

type FormProps = {
  name: string;
  amount: number;
  handleName: (name: EventTarget & HTMLInputElement) => void;
  handleSubmitForm: () => void;
  handleAmount: (amount: string) => void;
};

const Form = ({
  name,
  amount,
  handleName,
  handleSubmitForm,
  handleAmount,
}: FormProps) => (
  <aside>
    <form>
      <input
        type="text"
        name="name"
        placeholder="Enter the expense..."
        value={name}
        onChange={({ target: value }) => handleName(value)}
      />
    </form>

    <form onSubmit={() => handleSubmitForm()}>
      <input
        type="number"
        name="amount"
        placeholder="Enter the price..."
        value={amount}
        onChange={({ target: { value } }) => handleAmount(value)}
      />
    </form>
  </aside>
);

export default Form;
