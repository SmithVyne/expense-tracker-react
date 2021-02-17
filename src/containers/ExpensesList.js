import {Component} from 'react';
import { connect } from 'react-redux';
import Expense from '../components/Expense';

class ExpensesList extends Component {
  render() {
    const {category} = this.props.match.params;
    const {allExpenses} = this.props;
    const expenses = allExpenses[category];
    return (
      <>
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
}

const mapStateToProps = ({expenses: allExpenses}) => ({allExpenses});

export default connect(
  mapStateToProps
)(ExpensesList);