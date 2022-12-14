import React from "react";
import { NavLink } from "react-router-dom";

class Boards extends React.Component {
  render() {
    return (
      <NavLink exact="true" to="/octo-process" activeclassname="active-area">
        <div className="boards-area">
          <i className="material-icons">dns</i>
          <span>Boards</span>
        </div>
      </NavLink>
    );
  }
}

export default Boards;
