import {Link} from 'react-router-dom';

const categoriesList = [
  {name: 'Groceries', total: '', limit:'' },
  {name: 'Transportation', total: '', limit:'' },
  {name: 'Leisure', total: '', limit:'' }
];

function AddExpense(props) {
  return (
    <div id="categoryList">
      {
        categoriesList.map(({name, total, limit}) => (
          <Link className="categoryCard">
            <h4>{name}</h4>
            <p>Total: {total}</p>
            <p>Limit: {limit}</p>
          </Link>
        ))
      }
    </div>
  );
}

export default AddExpense;