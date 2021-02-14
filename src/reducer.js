const defaultStore = {
  currentUser: null,
  allCategories : [
    {name: 'Groceries', total: '', limit:'' },
    {name: 'Transportation', total: '', limit:'' },
    {name: 'Leisure', total: '', limit:'' },
  ],
};

const reducerFunction = (state = defaultStore, action) => {
  const {type, currentUser} = action;
  switch (type) {
    case 'LOGIN':
      return {...state, currentUser};
    default:
      return state;
  }
}

export default reducerFunction;