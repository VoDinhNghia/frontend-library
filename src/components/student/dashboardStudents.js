import React, { Component } from "react";

export default class BoardStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Dashboard students page</h3>
        </header>
      </div>
    );
  }
}
