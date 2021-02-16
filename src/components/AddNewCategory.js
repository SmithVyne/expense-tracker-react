import {Component} from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class AddNewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      limit: '',
      redirect: false,
     };
  }

  handleCategory ({name, value}) {
    this.setState({[name]: name === 'limit' ? parseInt(value, 10) : value})
  }

  postCategory({user_id, name, limit}) {  
    fetch('/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: 34, name, limit})
    })
    .then(response => response.ok && this.setState({redirect: true}));
  }
  
  render() {
    const {user_id} = this.props;
    const {name, limit, redirect} = this.state;
    if (redirect) {
      this.setState({redirect: false})
      return (<Redirect to="/categories" />)
    };

    return (
      <form>
        <input onChange={(e) => this.handleCategory(e.target)} name="name" value={name} type="text" placeholder="Give your category a name"  />
        <input onChange={(e) => this.handleCategory(e.target)} name="limit" value={limit} type="number" placeholder="Your limit" />
        {/* <input onChange={(e) => this.handleCategory(e.target)} name="total" value={total} type="number" /> */}
        <button onClick={()=>this.postCategory({user_id, name, limit})} type="button">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = ({currentUser: {id:user_id}}) => ({user_id});

export default connect(
  mapStateToProps
)(AddNewCategory);