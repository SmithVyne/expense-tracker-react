import React from 'react';

function Activity({title, amount}) {
  return (
    <div className="Expense">
      <p>{title}</p>
      <p>{amount}</p>
    </div>
  );
}

export default Activity;