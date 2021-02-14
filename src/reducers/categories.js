import CategoriesList from "../containers/CategoriesList";

const defaultState = {
  allCategories : [
    {name: 'Groceries', total: '', limit:'' },
    {name: 'Transportation', total: '', limit:'' },
    {name: 'Leisure', total: '', limit:'' },
  ],
};

const CategoriesReducer = (state=defaultState, action) => {
  return state;
}

export default CategoriesReducer;

