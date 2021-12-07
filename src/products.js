import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardGroup,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Redirect } from "react-router-dom";

import json from "./Product.json";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }
  componentDidMount() {
    this.setState({ cart: json.products });
  }

  addCart = (id) => {
    console.log(id);
    if (sessionStorage.getItem("mycart") !== undefined) {
      let arr = JSON.parse(sessionStorage.getItem("mycart"));
      if (arr.includes(id)) {
        alert("Product Alereay added");
      } else {
        arr.push(id);
        sessionStorage.setItem("mycart", JSON.stringify(arr));
        alert("product added to cart");
      }
    } else {
      let arr = [];
      arr.push(id);
      sessionStorage.setItem("mycart", JSON.stringify(arr));
      alert("product added to cart");
    }
  };
  render() {
    console.log(json.products);
    return (
      <Row>
        {json.products.map(({ pname, id, price, quantity, images }) => {
          return (
            <Col>
              <Card
                style={{
                  width: "16rem",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                <Card.Img src={images} height="40%" alt="..." />

                <Card.Title>{pname}</Card.Title>
                <h5>Price: {price}</h5>
                <h5>Quantity: {quantity}</h5>

                <Button onClick={() => this.addCart(id)}>Add to Cart</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mycounter: state.count,
  };
};
const mapDispatchTopProps = (dispatch) => {
  return {
    cart: function () {
      dispatch({ type: "CART", payload: 1 });
    },
  };
};
export default connect(mapStateToProps, mapDispatchTopProps)(Products);
