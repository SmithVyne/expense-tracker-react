import { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import {ADD_ALL_CATEGORIES} from '../actions';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: 'no'
    }
  }

  componentDidMount() {
    const {ADD_ALL_CATEGORIES} = this.props;
    this.setState({render: 'loading'});

    fetch('/categories')
    .then(response => response.json())
    .then(categories => {
      if (categories.length) {
        ADD_ALL_CATEGORIES(categories);
        this.setState({render: 'yes'});
      }
      this.setState({render: 'no'});
    })
    
  }

  render(){
    const {categories} = this.props;
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