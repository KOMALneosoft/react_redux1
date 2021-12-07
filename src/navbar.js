import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { connect } from "react-redux";
import Cart from "./cart";
import Sample from "./sample";
import Home from "./home";
import { GiShoppingBag } from "react-icons/gi";
import { Button } from "react-bootstrap";

function Navbar1(props) {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" fixed>
        <Container>
          <Navbar.Brand href="#home">Products</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home" class="nav-link">
              Home
            </Link>
            <Link to="/sample" class="nav-link">
              Products
            </Link>
            <Link to="/cart" class="nav-link">
              <GiShoppingBag />:{props.mycounter}
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/cart" exact component={Cart} />
        <Route path="/sample" exact component={Sample} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    mycounter: state.count,
  };
};

export default connect(mapStateToProps)(Navbar1);
