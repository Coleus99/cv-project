import { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className="card-body">
        <h3>Experience</h3>
        <p>{this.props.experience.details}</p>
        <i className="fas fa-edit" onClick={() => this.props.edit(this.props.id)} data-toggle="modal" data-target="#editModal"></i>
      </div>
    );
  }
}

export default Experience