import React from "react";
import Invite from "./Invite.jsx";

class Team extends React.Component {
  render() {
    return (
      <div className="kanban__nav-avs">
        <div className="kanban__nav-avs-img">
          <img src={require("../../assets/img/guvert.jpg")} alt="guvert"/>
        </div>
        <div className="kanban__nav-avs-img">
          <img src={require("../../assets/img/thompson.jpg")} alt="thompson"/>
        </div>
        <div className="kanban__nav-avs-img">
          <img src={require("../../assets/img/nilson.jpg")} alt="nilson"/>
        </div>
        <div className="kanban__nav-avs-img">
          <img src={require("../../assets/img/cobain.jpg")} alt="cobain"/>
        </div>
        <Invite />
      </div>
    );
  }
}

export default Team;
