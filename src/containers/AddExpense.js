import CategoriesList from './CategoriesList';
import ActivitiesList from './ActivitiesList';
import {Switch, Route} from 'react-router-dom';

function AddExpense(props) {
  return (
    <Switch>
      <Route exact path="/categories" component={CategoriesList} />
      <Route path="/categories/:category" component={ActivitiesList} />
    </Switch>
  );
}

export default AddExpense;