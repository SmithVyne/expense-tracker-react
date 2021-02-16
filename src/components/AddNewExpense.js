class AddNewExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      amount: '',
     };
  }
  render() {
    const {title, amount} = this.state;
    return (
      <form>
        <input type="text" value={title} name="title" />
        <input type="text" value={amount} name="amount" />
      </form>
    );
  }
}

export default AddNewExpense;