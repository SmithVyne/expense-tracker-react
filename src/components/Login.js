import {Component} from 'react';
import { connect } from 'react-redux';
import {LOGIN} from '../actions';
import SignUp from './SignUp';
import {Link} from 'react-router-dom';
import baseUrl from '../baseUrl';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      clkd_signup: false,
     };
  }

  handleInput = ({value}) => {
    this.setState({username: value});
  }
  
  async signIn(username) {
    const {LOGIN} = this.props;
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username})
    });

    if (response.ok) {
      response.json()
      .then(userData => LOGIN(userData));
    }
  }

  render() {
    const{username, clkd_signup} = this.state;
    if(clkd_signup) {
      return (
        <SignUp />
      )
    }

    return (
      <form id="authform">
        <input onChange={e => this.handleInput(e.target)} value={username} className="username-field" type="text" placeholder="username" />
        <button type="button" onClick={() => this.signIn(username)} className="loginBtn">Login</button>

        <Link to="/" 
        onClick={() => this.setState({clkd_signup: true})} id="signup_link">or sign up</Link>
      </form>
    );
  }
}

export default connect(
  null,
  {LOGIN}
)(Login);
