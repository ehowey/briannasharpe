/** @jsx jsx */
import { jsx } from "theme-ui";
import { Component } from "react";

class categoryList extends Component {
  render() {
    return (
      <div>
        <p>{this.props.item.name}</p>
        <p>{this.props.item.color}</p>
        <p>${this.props.item.price}</p>
      </div>
    );
  }
}

export default categoryList;
