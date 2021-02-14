import {Component} from 'react';
import { connect } from 'react-redux';
import {LOGIN} from '../actions';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
     };
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
    const{username} = this.state
    return (
      <div className="authForm">
        <h2>LOGIN</h2>
        <input onChange={e => this.handleInput(e.target)} value={username} className="username-field" type="text" placeholder="username" />
        <input type="button" onClick={() => this.signIn(username)} value="LOGIN" className="loginBtn"/>
      </div>
    );
  }
}

export default connect(
  null,
  {LOGIN}
)(Login);
