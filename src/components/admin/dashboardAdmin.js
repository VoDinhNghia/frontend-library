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
      librarian: librarian || libraryInfo.librarian?._id,
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
        id: item.profile?._id,
        name: `${item.profile?.lastName} ${item.profile?.firstName}`,
      };
    });
    return (
      <div className="container">
        <header className="jumbotron">
          <h3 className="mb-4">
            Th??ng tin th?? vi???n
            <span>
              <button
                className="editLibraryInfo"
                onClick={() => this.handleShow()}
              >
                <BsPencil />
              </button>
            </span>
          </h3>
          <h6>T??n: {libraryInfo.name || ""}</h6>
          <h6>N??m th??nh l???p: {libraryInfo.foundYear || ""}</h6>
          <h6>
            Ng?????i qu???n l??:{" "}
            {`${libraryInfo?.librarian?.lastName} ${libraryInfo?.librarian?.firstName}`}
          </h6>
          <h6>Gi???i thi???u: {libraryInfo?.description || ""}</h6>
        </header>
        <Modal show={showModal} onHide={() => this.handleClose()}>
          <Modal.Header>
            <Modal.Title>C???p nh???t th??ng tin th?? vi???n</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>T??n: </label>
            <input
              className="nameLibrary"
              type="text"
              onChange={(value) => this.updateField(value, "name")}
              defaultValue={libraryInfo.name}
            />
            <label>N??m th??nh l???p: </label>
            <input
              className="nameLibrary"
              type="text"
              onChange={(value) => this.updateField(value, "year")}
              defaultValue={libraryInfo.foundYear}
            />
            <label>Ng?????i qu???n l??:</label>
            <select
              className="nameLibrary"
              onChange={(value) => this.updateField(value, "librarian")}
              defaultValue={libraryInfo.librarian?._id}
            >
              {userInfo.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
            <label>Gi???i thi???u: </label>
            <textarea
              className="nameLibrary"
              type="text"
              onChange={(value) => this.updateField(value, "description")}
              defaultValue={libraryInfo.description}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => this.handleClose()}>
              H???y
            </Button>
            <Button variant="primary" onClick={() => this.handleSubmit()}>
              C???p nh???t
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
