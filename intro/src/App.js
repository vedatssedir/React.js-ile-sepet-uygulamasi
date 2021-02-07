import { Component } from "react";
import "./App.css";
import Navi from "./Navi";
import Product from "./Product";
import alertify from "alertifyjs";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartList from "./CartList";
import FormDemo from "./FormDemo";
export default class App extends Component {
  state = {
    products: [],
    categories: [],
    currentCategory: "",
    cart: [],
  };
  componentDidMount() {
    this.getProducts();
    this.getCategories();
  }

  changeCategory = (category) => {
    this.getWithCategoryProduct(category.id);
    this.setState({ currentCategory: category.categoryName });
  };

  getCategories = () => {
   
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({categories:data}));
  };
  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  getWithCategoryProduct = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
  };

  addToCard = (product) => {
    debugger;
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(
      `${product.productName} adlı basarılı bir sekilde eklendi`
    );
  };
  render() {
    return (
      <div className="container-fluid">
        <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Product
                {...props}
                addToCard={this.addToCard}
                products={this.state.products}
                title="Ürün Listesi"
                categories={this.state.categories}
                changeCategory={this.changeCategory}
                title="Kategori Listesi"
                currentCategory={this.state.currentCategory}
              />
            )}
          />
          <Route
            exact
            path="/cartlist"
            render={(props) => (
              <CartList
                {...props}
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
              />
            )}
          />
          <Route path="/form1" component={FormDemo}/>


        </Switch>
      </div>
    );
  }
}
