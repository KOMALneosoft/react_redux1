import { connect } from "react-redux";
import json from "./Product.json";
import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardGroup,
  Button,
} from "react-bootstrap";

const Cart = (props) => {
  const cart = useSelector((state) => state.cartItems);
  console.log(cart);
  // const dispatch = useDispatch();
  const newState = JSON.stringify(cart);
  localStorage.setItem("LState", newState);
  /* const LState = localStorage.getItem("LState");
  console.log(newState);*/

  return (
    <div className="cartcontainer">
      <h3>
        <Row>
          <Col>
            <Link to="/sample">
              <TiArrowBack />
              Back
            </Link>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => props.remove()}>
              Empty cart
            </Button>
          </Col>
        </Row>
      </h3>
      <Row>
        {cart.map((item) => {
          return (
            <Col>
              <Card
                style={{
                  width: "16rem",
                  marginLeft: "60px",
                  marginTop: "10px",
                }}
              >
                <CardImg
                  src={item.images}
                  height="250px"
                  className="card-img-top"
                  alt="..."
                />

                <h3>{item.pname}</h3>
                <h5>Price: {item.price}</h5>
                <h5>Quantity: {item.quantity}</h5>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mycounter: state.count,
  };
};
const mapDispatchTopProps = (dispatch) => {
  return {
    remove: function () {
      dispatch({
        type: "REMOVE",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(Cart);
