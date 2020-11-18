import { Component } from "react";

class Header extends Component {
  constructor(){
    super();
    this.state = {
      name: "John Doe",
      age: 50
    }
  }
  render() {
    return (
      <div className="jumbotron">
        <h1>{this.state.name}</h1>
        <i class="fas fa-edit" onClick={() => this.props.edit(this.state)}></i>
      </div>
    );
  }
}

export default Header;
