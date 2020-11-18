import { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <form>
          <input id="email" type="email" placeholder="email" />
        </form>
        <i class="fas fa-edit" onClick={(e) => this.props.edit(e)}></i>
      </div>
    );
  }
}

export default Contact;
