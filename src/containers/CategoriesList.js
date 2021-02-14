import { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import {ADD_ALL_CATEGORIES} from '../actions';
import Loader from '../components/Loader';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  async componentDidMount() {
    const {ADD_ALL_CATEGORIES} = this.props;
    this.setState({loading: true});

    await fetch('/categories')
    .then(response => response.json())
    .then(categories => ADD_ALL_CATEGORIES(categories) );
    
    this.setState({loading: false});
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
  {ADD_ALL_CATEGORIES}
)(CategoriesList);