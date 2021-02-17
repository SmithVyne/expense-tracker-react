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

  componentDidMount() {
    this.almightyFetcher()
  }

  async almightyFetcher() {
    const {ADD_ALL_CATEGORIES, ADD_ALL_EXPENSES, date} = this.props;
    this.setState({loading: true});
    console.log(date);

    await fetch(`/categories?category_date=${date[0]}`)
    .then(response => response.json())
    .then(categories => ADD_ALL_CATEGORIES(categories) );
    
    this.setState({loading: false});

    await fetch(`/expenses?expense_date=${date[0]}`)
    .then(response => response.json())
    .then(expenses => ADD_ALL_EXPENSES(expenses))
  }

  date_changer(modifier) {
    const {CHANGE_DATE} = this.props;
    CHANGE_DATE(modifier);
    this.almightyFetcher();
  }

  render(){
    const {categories, date} = this.props;
    const {loading} = this.state;
    if (loading) {
      return (
        <Loader />
      );
    }
    return (
      <>
        <div className="">
          <span onClick={() => this.date_changer(-1)} className="dateSliders">{'<'}</span>
          <span className="dateTime">{date[0]}</span>
          <span onClick={() => this.date_changer(1)} className="dateSliders">{'>'}</span>
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