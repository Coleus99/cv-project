import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron d-flex justify-content-center">
        <h1>{this.props.title.name}</h1>
        <i class="fas fa-edit" onClick={() => this.props.edit(this.props.id)}></i>
      </div>
    );
  }
}

export default Header;
