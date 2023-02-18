import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/authService";
import EventBus from "../common/eventBus";
import { roles } from "../common/constant";

export default class MenuMain extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showLibraryBoard: false,
      showAdminBoard: false,
      showUserBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showLibraryBoard: user.role.includes(roles.LIBRARIAN),
        showAdminBoard: user.role.includes(roles.ADMIN),
        showUserBoard: user.role.includes(roles.STUDENT) || user.role.includes(roles.LECTURER),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showLibraryBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showLibraryBoard, showAdminBoard } = this.state;
    return (
        <nav className="navbar navbar-expand bg-light">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <a target="_blank" href="http://localhost:8000" className="nav-link" rel="noreferrer">
              university
            </a>
          </li>

          <li className="nav-item">
            <a target="_blank" href="http://localhost:8002" className="nav-link" rel="noreferrer">
              attendance
            </a>
          </li>

          {showLibraryBoard && (
            <li className="nav-item">
              <Link to={"/dashboard-librarian"} className="nav-link">
                dashboard librarian
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/dashboard-admin"} className="nav-link">
                dashboard admin
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={this.logOut}>
                Log out
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        )}
      </nav>
    );
  }
}
