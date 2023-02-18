import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login";
import Home from "./components/home";
import BoardLibrarian from "./components/dashboardLibrarian";
import BoardAdmin from "./components/dashboardAdmin";
import BoardStudents from "./components/dashboardStudents";
import PrivateRouteAdmin from './common/protectedRouteAdmin';
import PrivateRouterLibrarian from './common/protectedRouteLibrarian';
import PrivateRouteStudent from './common/protectedRouteStudent';
import Footer from "./components/footer";
import MenuMain from "./components/menuMain";
import NotFoundRoute from "./components/notfoundPage";
import { routes } from "./common/constant";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'hello'
    };
  }

  render() {

    return (
      <div className="AppMain">
        <MenuMain />

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.LOGIN} element={<Login />} />
            <Route path={routes.DASHBOARD_LIBRARIAN} element={<PrivateRouterLibrarian><BoardLibrarian /></PrivateRouterLibrarian>} />
            <Route path={routes.DASHBOARD_STUDENTS} element={<PrivateRouteStudent><BoardStudents /></PrivateRouteStudent>} />
            <Route path={routes.DASHBOARD_ADMIN} element={<PrivateRouteAdmin><BoardAdmin /></PrivateRouteAdmin>} />
            <Route path="*" element={<NotFoundRoute />} />
          </Routes>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
