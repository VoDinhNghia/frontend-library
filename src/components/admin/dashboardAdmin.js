import React, { Component } from "react";
import libraryService from "../../services/libraryService";
import userService from "../../services/userService";
import { BsPencil } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./index.css";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      libraryInfo: {},
      showModal: false,
      nameLibrary: "",
      year: "",
      userList: [],
      librarian: "",
      description: "",
    };
  }

  componentDidMount() {
    this.getInfoLibrary();
    this.getUserList();
  }

  getInfoLibrary() {
    libraryService.getInfoLibrary().then((response) => {
      this.setState({
        libraryInfo: response?.data?.data,
      });
    });
  }

  getUserList() {
    userService.getAllUsers().then((res) => {
      this.setState({
        userList: res.data,
      });
    });
  }

  updateField(value, field) {
    switch (field) {
      case "name":
        this.setState({
          nameLibrary: value.target.value,
        });
        break;
      case "year":
        this.setState({
          year: value.target.value,
        });
        break;
      case "librarian":
        this.setState({
          librarian: value.target.value,
        });
        break;
      case "description":
        this.setState({
          description: value.target.value,
        });
        break;
      default:
        break;
    }
  }

  handleClose() {
    this.setState({
      showModal: false,
    });
  }

  handleShow() {
    this.setState({
      showModal: true,
    });
  }

  handleSubmit() {
    const {
      nameLibrary,
      year,
      libraryInfo = {},
      librarian,
      description,
    } = this.state;
    const id = libraryInfo._id || "";
    libraryService
      .updateInfo(id, {
        name: nameLibrary || libraryInfo.name,
        foundYear: year || libraryInfo.foundYear,
        librarian: librarian || libraryInfo.librarian?._id,
        description: description || libraryInfo.description,
      })
      .then((response) => {
        this.setState({
          libraryInfo: response.data,
        });
      });
    this.setState({
      showModal: false,
      libraryInfo: this.getInfoLibrary(),
    });
  }

  render() {
    const { libraryInfo = {}, showModal, userList = [] } = this.state;
    const userInfo = userList.map((item) => {
      return {
        id: item.user[0]?._id,
        name: `${item.user[0]?.lastName} ${item.user[0]?.firstName}`,
      };
    });
    return (
      <div className="container">
        <header className="jumbotron">
          <h3 className="mb-4">
            Thông tin thư viện
            <span>
              <button
                className="editLibraryInfo"
                onClick={() => this.handleShow()}
              >
                <BsPencil />
              </button>
            </span>
          </h3>
          <h6>Tên: {libraryInfo.name || ""}</h6>
          <h6>Năm thành lập: {libraryInfo.foundYear || ""}</h6>
          <h6>
            Người quản lý:{" "}
            {`${libraryInfo?.librarian?.lastName} ${libraryInfo?.librarian?.firstName}`}
          </h6>
          <h6>Giới thiệu: {libraryInfo?.description || ""}</h6>
        </header>
        <Modal show={showModal} onHide={() => this.handleClose()}>
          <Modal.Header>
            <Modal.Title>Cập nhật thông tin thư viện</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Tên: </label>
            <input
              className="nameLibrary"
              type="text"
              onChange={(value) => this.updateField(value, "name")}
              defaultValue={libraryInfo.name}
            />
            <label>Năm thành lập: </label>
            <input
              className="nameLibrary"
              type="text"
              onChange={(value) => this.updateField(value, "year")}
              defaultValue={libraryInfo.foundYear}
            />
            <label>Người quản lý:</label>
            <select
              className="nameLibrary"
              onChange={(value) => this.updateField(value, "librarian")}
              defaultValue={libraryInfo.librarian?._id}
            >
              {userInfo.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
            <label>Giới thiệu: </label>
            <textarea
              className="nameLibrary"
              type="text"
              onChange={(value) => this.updateField(value, "description")}
              defaultValue={libraryInfo.description}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => this.handleClose()}>
              Hủy
            </Button>
            <Button variant="primary" onClick={() => this.handleSubmit()}>
              Cập nhật
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
