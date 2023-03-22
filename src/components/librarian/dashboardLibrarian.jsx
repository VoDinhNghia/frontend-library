import React, { Component } from "react";
import './index.css'

export default class BoardLibrarian extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  render() {
    return (
      <div className="DashBoardLibrary">
        <h3>Dashboard librarian page</h3>
      </div>
    );
  }
}
