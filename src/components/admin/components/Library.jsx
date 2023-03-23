import React, { Component } from "react";
import libraryService from "../../../services/libraryService";
import userService from "../../../services/userService";
import { BsPencil } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./indexAdmin.css";
import moment from "moment/moment";

export default class LibrarySetting extends Component {
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
        userList: res.data?.data,
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

  async handleSubmit() {
    const {
      nameLibrary,
      year,
      libraryInfo = {},
      librarian,
      description,
    } = this.state;
    const id = libraryInfo._id || "";
    const updateBody = {
      name: nameLibrary || libraryInfo.name,
      foundYear: year || libraryInfo.foundYear,
      librarian: librarian || libraryInfo.librarian?.id,
      description: description || libraryInfo.description,
    };
    await libraryService.updateInfo(id, updateBody)
    this.setState({
      showModal: false,
      libraryInfo: this.getInfoLibrary(),
    });
  }

  render() {
    const { libraryInfo = {}, showModal, userList = [] } = this.state;
    const userInfo = userList.map((item) => {
      return {
        id: item.id,
        name: `${item?.lastName} ${item?.firstName}`,
      };
    });
    return (
      <div className="LibrarySetting">
        <header className="Jumbotron">
          <h3 className="mb-4">
            Thông tin thư viện
            <span className="EditInfoLibrary">
              <button
                className="BtnEditInfoLibrary"
                onClick={() => this.handleShow()}
              >
                <BsPencil />
              </button>
            </span>
          </h3>
          <p>Tên: {libraryInfo.name || ""}</p>
          <p>Năm thành lập: {libraryInfo.foundYear ? moment(libraryInfo.foundYear).format('DD-MM-YYYY') : ''}</p>
          <p>
            Người quản lý:{" "}
            {`${libraryInfo?.librarian?.lastName || ''} ${libraryInfo?.librarian?.firstName || ''}`}
          </p>
          <p>Giới thiệu: {libraryInfo?.description || ""}</p>
        </header>
        <Modal show={showModal} onHide={() => this.handleClose()} className="ModalUpdateLibrary">
          <Modal.Header>
            <Modal.Title>Cập nhật thông tin thư viện</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Tên: </label>
            <input
              className="WidthInput"
              type="text"
              onChange={(value) => this.updateField(value, "name")}
              defaultValue={libraryInfo.name}
            />
            <label>Năm thành lập: </label>
            <input
              className="WidthInput"
              type="text"
              onChange={(value) => this.updateField(value, "year")}
              defaultValue={libraryInfo.foundYear ? moment(libraryInfo.foundYear).format('YYYY-MM-DD') : ''}
            />
            <label>Người quản lý:</label>
            <select
              className="WidthInput"
              onChange={(value) => this.updateField(value, "librarian")}
              defaultValue={libraryInfo.librarian?.id}
            >
              {userInfo.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
            <label>Giới thiệu: </label>
            <textarea
              className="WidthInput"
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
