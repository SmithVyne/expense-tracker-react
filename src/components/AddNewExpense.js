import {Component} from 'react';
import baseUrl from '../baseUrl';

class AddNewExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      amount: '',
    };
  }

  handleExpenses({value, name}) {
    this.setState({[name]: name === 'amount' ? parseInt(value, 10) : value})
  }

  postExpense(category_id, title, amount) {
    fetch(`${baseUrl}/expenses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({category_id, title, amount})
    })
  } 
  
  render() {
    const {category: category_id} = this.props.match.params;
    const {title, amount} = this.state;
    return (
      <form className="newCategoryForm newExpensesForm">
        <input type="text" onChange={(e) => this.handleExpenses(e.target)} value={title} name="title" placeholder="Title" />
        <input type="text" onChange={(e) => this.handleExpenses(e.target)} value={amount} name="amount" placeholder="Amount" />

        <button onClick={() => this.postExpense(category_id, title, amount)} type="button">Create</button>
      </form>
    );
  }
}

export default AddNewExpense;