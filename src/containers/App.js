import '../styles/App.css';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSignedIn: 'no',
    }
  }

  render() {
    const {userSignedIn} = this.state;
    return (
      <>
        <main>
          <h1 id="title">
            Expenses Tracker
          </h1>
          <Switch>
            <Redirect exact from='/' to='/categories' />
            <Route exact path="/categories" component={CategoriesList} />
            <Route path="/categories/new" component={AddNewCategory} />
            <Route path="/categories/:category/expenses" component={ExpensesList} />
            <Route path="/categories/:category/:expense" component={Expense} />
          </Switch>
        </main>
        
        <Nav />
      </>
    );
    
    if (userSignedIn === 'loading') {
      return (
        <main className="loginPage">
          <Loader />
        </main>
      );
    }
    
    else if( userSignedIn === 'yes') {
      return (
        <>
          <main className="loginPage">
            <h1 id="title">
              Expenses Tracker
            </h1>
            <Switch>
              <Route exact path="/categories" component={CategoriesList} />
              <Route path="/categories/:category" component={ExpensesList} />
            </Switch>
          </main>
          <nav>
            
          </nav>
        </>
      )
    }

    return (
      <main>
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