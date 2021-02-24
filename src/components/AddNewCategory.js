import {Component} from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import plus from '../assets/images/plus.svg';

class AddNewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      limit: '',
      redirect: false,
      render: false,
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
      body: JSON.stringify({user_id:2, name, limit, total:0})
    })
    .then(response => response.ok && this.setState({redirect: true}));
  }
  
  render() {
    const {user_id} = this.props;
    const {name, limit, redirect, render} = this.state;
    if (redirect) {
      return (<Redirect to="/categories" />)
    };

    if (render) {
      return (
        <form className="newCategoryForm">
          <input onChange={(e) => this.handleCategory(e.target)} name="limit" value={limit} type="number" placeholder="" />
          <input onChange={(e) => this.handleCategory(e.target)} name="name" value={name} type="text" placeholder=""  />
          
          <button onClick={()=>this.postCategory({user_id, name, limit})} type="button">Submit</button>
          <span id="name-label">Limit</span>
          <span id="limit-label">Name</span>
        </form>
      );
    }

    return (
      <img alt="" onClick={() => this.setState({render: true})} id="new_category_plus_icon" src={plus} />
    );

  }
}

const mapStateToProps = ({currentUser: {id:user_id}}) => ({user_id});

export default connect(
  mapStateToProps
)(AddNewCategory);