import {Link} from 'react-router-dom';

function Category({id, name, total, limit}) {
  
  return (
    <Link to={`/categories/${id}/activities`} className="categoryCard">
      <h4>{name}</h4>
      <p>Total: {total}</p>
      <p>Limit: {limit}</p>
    </Link>
  );
}

export default Category;