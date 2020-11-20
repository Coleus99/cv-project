import { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="card-body">
        <h3>Contact Details</h3>
        <p>Email: {this.props.contact.email[0]}</p>
        <p>Phone: {this.props.contact.phone[0]}</p>
        <i
          className="fas fa-edit"
          onClick={() => this.props.edit(this.props.id)}
          data-toggle="modal"
          data-target="#editModal"
        ></i>
      </div>
    );
  }
}

export default Contact;
