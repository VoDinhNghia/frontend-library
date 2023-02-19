import React, { Component } from "react";
import libraryService from "../../services/libraryService";
import { BsPencil } from 'react-icons/bs';
import "./index.css";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      libraryInfo: {}
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

  render() {
    const { libraryInfo = {} } = this.state;
    console.log('libraryInfo', libraryInfo);
    return (
      <div className="container">
        <header className="jumbotron">
          <h3 className="mb-4">Thông tin thư viện <span><button className="editLibraryInfo"><BsPencil /></button></span></h3>
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
      </div>
    );
  }
}
