import {Link} from 'react-router-dom';
import {LOGIN} from '../actions';
import Login from './Login';
import {useState} from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';

function SignUp({LOGIN}) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [clkd_login, set_clkd_login] = useState(false);

  const handleInput = ({value}) => {
    console.log(value);
    setUsername(value);
  }
  
  const signUp = async (username) => {
    setLoading(true);

    const response = await fetch('/users', {
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
  
  if (loading) {
    return (
      <Loader />
    );
  }

  if (clkd_login) {
    return (
      <Login />
    );
  }

  return (
    <form id="authform">
      <input onChange={(e) => handleInput(e.target)} value={username} className="username-field" type="text" placeholder="username" />
      
      <button type="button" onClick={() => signUp(username)} className="loginBtn">Sign up</button>

      <Link to="/" onClick={() => set_clkd_login(true)} id="signup_link">log in?</Link>
    </form>
  );
}

export default connect(
  null,
  {LOGIN}
)(SignUp);