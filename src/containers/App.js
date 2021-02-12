import '../styles/App.css';
import {Component} from 'react';
import {connect} from 'react-redux';
import {LOGIN} from '../actions';
import { Route, Switch, Link } from 'react-router-dom';
import AddExpense from './AddExpense';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSignedIn: 'no',
      username: '',
    }

    this.signIn = this.signIn.bind(this);
  }

  handleInput = ({value}) => {
    this.setState({username: value});
  }
  
  async signIn(username) {
    const {LOGIN} = this.props;
    this.setState({userSignedIn: 'loading'});
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username})
    });

    if (response.ok) {
      response.json()
      .then(userData => LOGIN(userData) && this.setState({userSignedIn:'yes'}));
    }
  }

  render() {
    const {userSignedIn, username} = this.state;
    return (
      <>
        <main>
          <h1 id="title">
            Expenses Tracker
          </h1>
          <Switch>
            <Route exact path="/" component={AddExpense} />
          </Switch>
        </main>
        <nav>
          
        </nav>
      </>
    );
    
    if (userSignedIn === 'loading') {
      return (
        <main className="loginPage">
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
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
              <Route exact path="/" component={AddExpense} />
            </Switch>
          </main>
          <nav>
            
          </nav>
        </>
      )
    }

    return (
      <main>
        <div className="authForm">
          <h2>LOGIN</h2>
          <input onChange={e => this.handleInput(e.target)} value={username} className="username-field" type="text" placeholder="username" />
          <input type="button" onClick={() => this.signIn(username)} value="LOGIN" className="loginBtn"/>
        </div>
      </main>
    );
  }
}

const mapStateToProps = ({currentUser}) => ({currentUser});

export default connect(
  mapStateToProps,
  {LOGIN}
)(App);