import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import CategoryList from "./CategoryList";
export default class Product extends Component {
  state = { index: 0 };

  render() {
    return (
      <div>
        <h2 className="text-center">{this.props.title}</h2>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <CategoryList
              categories={this.props.categories}
              changeCategory={this.props.changeCategory}
              title="Kategori Listesi"
              currentCategory={this.props.currentCategory}
            />
          </div>
          <div className="col-md-9">
            <Table className="table-sm table-bordered">
              <thead>
                <tr>
                  <th>Product Id</th>
                  <th>ProductName</th>
                  <th>CategoryId</th>
                  <th>Unit</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.products.map((products) => (
                  <tr key={products.id}>
                    <th scope="row">{products.id}</th>
                    <td>{products.productName}</td>
                    <td>{products.categoryId}</td>
                    <td>{products.quantityPerUnit}</td>
                    <td>{products.unitPrice}</td>
                    <td>{products.unitsInStock}</td>
                    <td>
                      <Button
                        color="info"
                        onClick={() => this.props.addToCard(products)}
                      >
                        Add To Card
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        </div>

      </div>
    );
  }
}
