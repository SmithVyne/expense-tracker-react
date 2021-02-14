import {Link} from 'react-router-dom';

function Category({name, total, limit, match}) {
  
  return (
    <Link className="categoryCard">
      <h4>{name}</h4>
      <p>Total: {total}</p>
      <p>Limit: {limit}</p>
    </Link>
  );
}

export default Category;