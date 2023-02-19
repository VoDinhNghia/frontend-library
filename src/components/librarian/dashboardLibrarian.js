import React, { Component } from "react";

export default class BoardLibrarian extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Dashboard librarian page</h3>
        </header>
      </div>
    );
  }
}
