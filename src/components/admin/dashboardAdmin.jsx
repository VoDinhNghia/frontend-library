import React, { Component } from "react";
import MenuAdmin from "./components/MenuAdmin";
import LibrarySetting from "./components/Library";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs lg="2"><MenuAdmin /></Col>
          <Col style={{ marginLeft: 15 }}><LibrarySetting /></Col>
        </Row>
      </div>
    );
  }
}
