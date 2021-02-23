import {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Expense from '../components/Expense';

class ExpensesList extends Component {
  render() {
    const {category: category_id} = this.props.match.params;
    const {allExpenses} = this.props;
    const expenses = allExpenses[category_id];
    if (expenses) {
      return (
        <>
          <Link className="addExpenseIcon" to={`/categories/${category_id}/expenses/new`} ><i class="fas fa-plus"></i></Link>
          <div id="expensesList">
            {
              expenses.map(({title, amount}) => (
                <Expense title={title} amount={amount} />
              ))
            }
          </div>
        </>
      );
    }

    return (<Link to={`/categories/${category_id}/expenses/new`}></Link>);
  }
}

const mapStateToProps = ({expenses: allExpenses}) => ({allExpenses});

export default connect(
  mapStateToProps
)(ExpensesList);