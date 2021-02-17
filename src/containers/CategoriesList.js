import { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import {ADD_ALL_CATEGORIES, ADD_ALL_EXPENSES, CHANGE_DATE} from '../actions';
import Loader from '../components/Loader';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  async componentDidMount() {
    const {ADD_ALL_CATEGORIES, ADD_ALL_EXPENSES, date} = this.props;
    this.setState({loading: true});

    await fetch(`/categories?category_date=${date}`)
    .then(response => response.json())
    .then(categories => ADD_ALL_CATEGORIES(categories) );
    
    this.setState({loading: false});

    await fetch(`/expenses?expense_date=${date}`)
    .then(response => response.json())
    .then(expenses => ADD_ALL_EXPENSES(expenses))
  }

  render(){
    const {categories, date, CHANGE_DATE} = this.props;
    const {loading} = this.state;
    if (loading) {
      return (
        <Loader />
      );
    }
    return (
      <>
        <div className="">
          <span onClick={() => CHANGE_DATE(-1)} className="dateSliders">{'<'}</span>
          <span className="dateTime">{date[0]}</span>
          <span onClick={() => CHANGE_DATE(1)} className="dateSliders">{'>'}</span>
        </div>
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
      </>
      );
  }
};

const mapStateToProps = ({categories, date}) => ({categories, date});

export default connect(
  mapStateToProps,
  {ADD_ALL_CATEGORIES, ADD_ALL_EXPENSES, CHANGE_DATE}
)(CategoriesList);