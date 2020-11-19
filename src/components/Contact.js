import { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h3>Contact Details</h3>
        <p>Email: {this.props.contact.email}</p>
        <i className="fas fa-edit" onClick={() => this.props.edit(this.props.id)}></i>
      </div>
    );
  }
}

export default Contact;
