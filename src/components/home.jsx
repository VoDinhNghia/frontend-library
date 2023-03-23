import React, { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "hello",
    };
  }

  handleSearch(value) {
    console.log(value);
  }

  render() {
    return (
      <>
        <div className="Hompage">
          <h4>Tìm kiếm thông tin</h4>
          <span><input className="SearchHomePage" icon='search' placeholder='Tìm kiếm thông tin...' onChange={(value) => this.handleSearch(value)} /></span>
        </div>
        <div className="Hompage">
          <h4>Tin tức - Sự kiện</h4>
          <ul>
            <li>
              <a href="http://localhost:8001/new-book">Sách mới</a>
            </li>
          </ul>
        </div>
        <div className="Hompage">
          <h4>Dịch vụ</h4>
          <p>....</p>
        </div>
      </>
    );
  }
}
