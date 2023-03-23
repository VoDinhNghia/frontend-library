import React, { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "hello",
    };
  }

  render() {
    return (
      <div className="Hompage">
        <h3>Tin tức - Sự kiện</h3>
        <ul>
          <li>
            <a href="http://localhost:8001/new-book">Sách mới</a>
          </li>
        </ul>
        <h3>Dịch vụ</h3>
      </div>
    );
  }
}
