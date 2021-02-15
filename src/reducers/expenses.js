const ExpensesReducer = (state={}, action) => {
  const {type, expenses} = action;
  
  switch (type) {
    case 'ADD_ALL_EXPENSES':
      return {...expenses}
    default:
      return state;
  }
}

export default ExpensesReducer;

