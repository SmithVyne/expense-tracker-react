import '../styles/App.css';
import {Component} from 'react';
import {connect} from 'react-redux';
import {LOGIN} from '../actions';
import { Route, Switch } from 'react-router-dom';
import ActivitiesList from './ActivitiesList';
import CategoriesList from './CategoriesList';
import Activity from '../components/Activity';
import Loader from '../components/Loader';
import Login from '../components/Login';
import AddNewCategory from '../components/AddNewCategory';

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
            <Route exact path="/categories" component={CategoriesList} />
            <Route path="/categories/new" component={AddNewCategory} />
            <Route path="/categories/:category/activities" component={ActivitiesList} />
            <Route path="/categories/:category/:activity" component={Activity} />
          </Switch>
        </main>
        <nav>
          
        </nav>
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
              <Route path="/categories/:category" component={ActivitiesList} />
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