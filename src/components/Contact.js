import { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      field : "asdf",
      fields : [
        {email: "john@example.com"},
        {phone: '01238432123'}
      ]
    };
  }
  render() {
    return (
      <div>
        <form>
          <input id="email" type="email" placeholder="email" />
        </form>
        <i class="fas fa-edit" onClick={() => this.props.edit(this.state)}></i>
      </div>
    );
  }
}

export default Contact;
