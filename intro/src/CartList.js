import React, { Component } from "react";
import { Table } from "reactstrap";

export default class CartList extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.renderCart = this.renderCart.bind(this);
  }
  renderCart() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Sıra</th>
              <th>Ürün Adı</th>
              <th>Birim Fiyatı</th>
              <th>Stok Miktarı</th>
              <th>Adet</th>
              <th>Toplam Fiyat</th>
              <th>Ürün Sil</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem, index) => (
              <tr key={cartItem.product.id}>
                <td>{(index += 1)}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.product.unitPrice * cartItem.quantity}₺</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => this.props.removeFromCart(cartItem.product)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }

  renderEmptyCart() {
    return <div className="alert alert-danger">Sepet Boş!</div>;
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderCart()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
