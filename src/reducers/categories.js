const CategoriesReducer = (state=[], action) => {
  const {type, categories} = action;
  switch (type) {
    case 'ADD_ALL_CATEGORIES':
      return [...categories]
    default:
      return state;
  }
}

export default CategoriesReducer;

