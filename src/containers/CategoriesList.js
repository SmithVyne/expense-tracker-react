import React from 'react';
import Category from '../components/Category';

const categoriesList = [
  {name: 'Groceries', total: '', limit:'' },
  {name: 'Transportation', total: '', limit:'' },
  {name: 'Leisure', total: '', limit:'' }
];

function CategoriesList(props) {
  return (
    <div id="categoryList">
      {
        categoriesList.map(({name, total, limit}) => (
          <Category 
            name={name} 
            total={total}
            limit={limit}
          />
        ))
      }
    </div>
  );
}

export default CategoriesList;