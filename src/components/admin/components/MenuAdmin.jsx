import React, { Component } from "react";
import "./indexAdmin.css";

export default class MenuAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const liMenu = ["Library setting", "Room setting"];
    return (
      <div className="MenuAdmin">
        <nav className="navbarMenu">
          <p className="TitleMenuAdmin">Dashboard Admin</p>
          <hr />
          <ul className="navbarList">
            {liMenu.map((item) => { return (
              <li className="navbarLi">
                {item}
              </li>
            )})}
          </ul>
        </nav>
      </div>
    );
  }
};
