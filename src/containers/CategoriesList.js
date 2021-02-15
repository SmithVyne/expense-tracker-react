import { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import {ADD_ALL_CATEGORIES, ADD_ALL_EXPENSES} from '../actions';
import Loader from '../components/Loader';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  async componentDidMount() {
    const {ADD_ALL_CATEGORIES, ADD_ALL_EXPENSES} = this.props;
    this.setState({loading: true});

    await fetch('/categories')
    .then(response => response.json())
    .then(categories => ADD_ALL_CATEGORIES(categories) );
    
    this.setState({loading: false});

    await fetch('/expenses')
    .then(response => response.json())
    .then(expenses => ADD_ALL_EXPENSES(expenses))
  }

  render(){
    const {categories} = this.props;
    const {loading} = this.state;
    if (loading) {
      return (
        <Loader />
      );
    }
    return (
      <div id="categoryList">
        {
          categories.map(({id, name, total, limit}) => (
            <Category 
              name={name} 
              total={total}
              limit={limit}
              id = {id}
            />
          ))
        }
      </div>
      );
  }
};

const mapStateToProps = ({categories}) => ({categories});

export default connect(
  mapStateToProps,
  {ADD_ALL_CATEGORIES, ADD_ALL_EXPENSES}
)(CategoriesList);