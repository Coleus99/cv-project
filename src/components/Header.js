import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron d-flex justify-content-center">
        <div>
          <h1>{this.props.title.name}</h1>
          <h4>{this.props.title.position}</h4>
        </div>
        <i
          className="fas fa-edit"
          onClick={() => this.props.edit(this.props.id)}
        ></i>
      </div>
    );
  }
}

export default Header;
