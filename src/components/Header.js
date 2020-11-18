import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>{this.props.name}</h1>
        <i class="fas fa-edit" onClick={(e) => this.props.edit(e)}></i>
      </div>
    );
  }
}

export default Header;
