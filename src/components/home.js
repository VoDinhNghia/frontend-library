import React, { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'hello'
    };
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Home</h3>
        </header>
      </div>
    );
  }
}
