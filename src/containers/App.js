import '../styles/App.css';
import '../styles/Forms.css';
import {Component} from 'react';
import {connect} from 'react-redux';
import {LOGIN} from '../actions';
import { Redirect, Route, Switch } from 'react-router-dom';
import ExpensesList from './ExpensesList';
import CategoriesList from './CategoriesList';
import Expense from '../components/Expense';
import Loader from '../components/Loader';
import Login from '../components/Login';
import AddNewCategory from '../components/AddNewCategory';
import Nav from './Nav';
import AddNewExpense from '../components/AddNewExpense';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  render() {
    const {currentUser} = this.props.currentUser;
    const {loading} = this.state;
    console.log(currentUser);
    
    if (loading) {
      return (
        <main className="loginPage">
          <Loader />
        </main>
      );
    }
    
    if(currentUser) {
      return (
        <>
          <main>
            <h1 id="title">
              Expenses.tracker
            </h1>
            <Switch>
              <Redirect exact from='/' to='/categories' />
              <Route exact path="/categories" component={CategoriesList} />
              <Route path="/categories/new" component={AddNewCategory} />
              <Route path="/categories/:category/expenses/new" component={AddNewExpense} />
              <Route path="/categories/:category/expenses" component={ExpensesList} />
              <Route path="/categories/:category/:expense" component={Expense} />
            </Switch>
            <Nav />
          </main>
        </>
      );
    }

    return (
      <main className="loginPage">
        <Login />
      </main>
    );
  }
}

const mapStateToProps = ({currentUser}) => ({currentUser});

export default connect(
  mapStateToProps,
  {LOGIN}
)(App);