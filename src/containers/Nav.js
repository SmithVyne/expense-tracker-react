import { NavLink } from "react-router-dom";
import '../styles/Nav.css';
import graph from '../assets/images/graph.svg';
import growth_arrow from '../assets/images/growth-arrow.svg';
import pie_chart from '../assets/images/pie-chart.svg';
import account from '../assets/images/account.svg';
import {LOGOUT} from '../actions';
import { connect } from "react-redux";

function Nav({LOGOUT}) {
  return (
    <nav>
      <NavLink exact activeClassName="active_nav_item" className="nav-items" id="" to="/categories/new">
        <img src={growth_arrow} alt="add expenses" />
        <span>Add an expense</span>
      </NavLink>

      <NavLink exact activeClassName="active_nav_item" className="nav-items" to="/categories/">
        <img src={graph} alt="track it" />
        <span>Track.it</span>
      </NavLink>

      <NavLink exact activeClassName="active_nav_item" to="/progress" className="nav-items">
        <img src={pie_chart} alt="pie chart" />
        <span>Your progress</span>
      </NavLink>

      <NavLink onClick={() => LOGOUT()} exact activeClassName="active_nav_item" to="/" className="nav-items">
        <img src={account} alt="account icon" />
        <span>Logout</span>
      </NavLink>
    </nav>
  );
}

export default connect(
  null,
  {LOGOUT}
)(Nav);