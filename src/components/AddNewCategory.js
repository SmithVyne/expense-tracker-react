import {Component} from 'react';
import { connect } from "react-redux";

class AddNewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      limit: 0,
      total: 0,
     };
  }

  handleCategory ({name, value}) {
    this.setState({[name]: ['name', 'limit'].includes(name) ? value : parseInt(value, 10)})
  }

  postCategory({user_id, name, limit, total}) {
    
  }
  
  render() {
    const {user_id} = this.props;
    const {name, limit, total} = this.state;
    return (
      <form onChange={(e) => this.handleCategory(e.target)} >
        <input name="name" value={name} type="text" />
        <input name="limit" value={limit} type="number" />
        <input name="total" value={total} type="number" />
        <button onClick={()=>this.postCategory({user_id, name, limit, total})} type="button">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = ({currentUser: {id:user_id}}) => ({user_id});

export default connect(
  mapStateToProps
)(AddNewCategory);