import React, { Component } from "react";
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
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import json from "./Product.json";

function Sample(props) {
  const cart = useSelector((state) => state.cartItems);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <Row>
      {json.products.map((item) => {
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

              <Button
                onClick={() =>
                  props.cart(
                    item.id,
                    item.images,
                    item.pname,
                    item.price,
                    item.quantity
                  )
                }
              >
                Add to Cart
              </Button>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
const mapStateToProps = (state) => {
  return {
    mycounter: state.count,
  };
};

const mapDispatchTopProps = (dispatch) => {
  return {
    cart: function (id, images, pname, price, quantity) {
      dispatch({
        type: "CART",
        payload: {
          id: id,
          images: images,
          pname: pname,
          price: price,
          quantity: quantity,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(Sample);
