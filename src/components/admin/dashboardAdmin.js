import React, { Component } from "react";
import libraryService from "../../services/libraryService";
import { BsPencil } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./index.css";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      libraryInfo: {},
      showModal: false,
      nameLibrary: '',
      year: ''
    };
  }

  componentDidMount() {
    this.getInfoLibrary()
  }

  getInfoLibrary() {
    libraryService.getInfoLibrary().then(
      (response) => {
        this.setState({
          libraryInfo: response?.data?.data,
        })
      },
    );
  }

  updateField(value, field) {
    switch (field) {
      case 'name':
        this.setState({
          nameLibrary: value.target.value
        })
        break;
      case 'year':
        this.setState({
          year: value.target.value
        })
        break;
      default:
        break;
    }
  }

  handleClose() {
    this.setState({
      showModal: false,
    })
  }

  handleShow() {
    this.setState({
      showModal: true,
    })
  }

  handleSubmit() {
    const { nameLibrary, year, libraryInfo = {} } = this.state;
    const id = libraryInfo._id || '';
    libraryService.updateInfo(
      id, { 
        name: nameLibrary || libraryInfo.name, 
        foundYear: year || libraryInfo.foundYear, 
      }
    ).then(
      (response) => {
        this.setState({
          libraryInfo: response.data
        })
      },
    );
    this.setState({
      showModal: false,
    })
  }


  render() {
    const { libraryInfo = {}, showModal } = this.state;
    return (
      <div className="container">
        <header className="jumbotron">
          <h3 className="mb-4">
            Thông tin thư viện 
            <span>
              <button className="editLibraryInfo" onClick={() => this.handleShow()}><BsPencil /></button>
            </span>
          </h3>
          <h6>Tên: {libraryInfo.name || ''}</h6>
          <h6>Năm thành lập: {libraryInfo.foundYear || ''}</h6>
        </header>
        <header className="jumbotron">
          <h3 className="mb-4">Thông tin người quản lý thư viện</h3>
          <h6>Tên: {libraryInfo?.librarian?.firstName || ''}</h6>
        </header>
        <header className="jumbotron">
          <h3 className="mb-4">Mô tả thư viện</h3>
          <h6>{libraryInfo?.description || ''}</h6>
        </header>
        <Modal show={showModal} onHide={() => this.handleClose()}>
          <Modal.Header>
            <Modal.Title>Cập nhật thông tin thư viện</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Tên: </label>
            <input className="nameLibrary" type="text" onChange={(value) => this.updateField(value, 'name')} />
            <label>Năm thành lập: </label>
            <input className="nameLibrary" type="text" onChange={(value) => this.updateField(value, 'year')} />
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
