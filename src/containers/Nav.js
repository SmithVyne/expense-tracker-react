import { Link } from "react-router-dom";
import '../styles/Nav.css';
import graph from '../assets/images/graph.svg';
import growth_arrow from '../assets/images/growth-arrow.svg';
import pie_chart from '../assets/images/pie-chart.svg';
import account from '../assets/images/account.svg';

function Nav(props) {
  return (
    <nav>
      <Link className="nav-items" id="" to="/categories/new">
        <img src={growth_arrow} alt="add expenses" />
        <span>Add an expense</span>
      </Link>

      <Link className="nav-items" to="/categories">
        <img src={graph} alt="track it" />
        <span>Track.it</span>
      </Link>

      <Link className="nav-items">
        <img src={pie_chart} alt="pie chart" />
        <span>Your progress</span>
      </Link>

      <Link className="nav-items">
        <img src={account} alt="account icon" />
        <span>Logout</span>
      </Link>
    </nav>
  );
}

export default Nav;