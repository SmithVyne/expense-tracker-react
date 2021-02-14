const defCategories = [{id: 0, name: 'Groceries', total: '', limit:'' },{id: 1, name: 'Transportation', total: '', limit:'' }];

const CategoriesReducer = (state=defCategories, action) => {
  const {type, categories} = action;
  switch (type) {
    case 'ADD_ALL_CATEGORIES':
      return [...categories]
    default:
      return state;
  }
  return state;
}

export default CategoriesReducer;

