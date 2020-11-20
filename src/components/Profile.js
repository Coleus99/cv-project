import { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="card-body">
        <h3>About Me</h3>
        <p>{this.props.profile.about}</p>
        <i className="fas fa-edit" onClick={() => this.props.edit(this.props.id)} data-toggle="modal" data-target="#editModal"></i>
      </div>
    );
  }
}

export default Profile

