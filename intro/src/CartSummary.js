import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Button,
} from "reactstrap";

import { Link } from "react-router-dom";
import CartList from "./CartList";
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepet
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Button
                color="danger"
                className="ml-3 btn btn-sm"
                onClick={() => this.props.removeFromCart(cartItem.product)}
              >
                X
              </Button>
              {cartItem.product.productName}
              <Badge color="primary" className="ml-2">
                {cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}

          <DropdownItem>
            <Link to="cartlist">Sepete Git</Link>
         
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmpty() {
    return <div className="alert alert-danger">Sepet Boş</div>;
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}
