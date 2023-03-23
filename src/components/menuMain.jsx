import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/authService";
import { BsHouseFill, BsFillArrowRightSquareFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import EventBus from "../common/eventBus";
import { roles, routes, LINKS } from "../common/constant";

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
        showLibraryBoard: user?.role?.includes(roles.LIBRARIAN),
        showAdminBoard: user?.role?.includes(roles.ADMIN),
        showUserBoard:
          user?.role?.includes(roles.STUDENT) ||
          user?.role?.includes(roles.LECTURER),
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
      <div className="MenuMain">
        <nav className="navbar navbar-expand">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={routes.HOME} className="nav-link">
                <BsHouseFill /> Home
              </Link>
            </li>

            <li className="nav-item">
              <a
                target="_blank"
                href={LINKS.UNIVERSITY}
                className="nav-link"
                rel="noreferrer"
              >
                university
              </a>
            </li>

            <li className="nav-item">
              <a
                target="_blank"
                href={LINKS.ATTENDANCE}
                className="nav-link"
                rel="noreferrer"
              >
                attendance
              </a>
            </li>

            {showLibraryBoard && (
              <li className="nav-item">
                <Link to={routes.DASHBOARD_LIBRARIAN} className="nav-link">
                  dashboard librarian
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={routes.DASHBOARD_ADMIN} className="nav-link">
                  dashboard admin
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href={routes.LOGIN} className="nav-link" onClick={this.logOut}>
                  Log out <BsFillArrowRightSquareFill />
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={routes.LOGIN} className="nav-link">
                  Login <BsFillArrowLeftCircleFill />
                </Link>
              </li>
            </div>
          )}
        </nav>
      </div>
    );
  }
}
