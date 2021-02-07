import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";


const activeStyle={
  backgroundColor:"gray",
  fontSize:25
}


export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem className="mt-5" style={activeStyle}>
            {this.props.title}
          </ListGroupItem>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
       
      </div>
    );
  }
}
