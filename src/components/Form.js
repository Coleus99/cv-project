import { Component } from "react";

class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {
      section : {}
    }
  }
  storeValue = (e) => {
    let newState=this.state;
    newState.section[e.target.id][0] = e.target.value;
    this.setState(newState);
  }
  componentDidUpdate(prevProps) {
    //Typical usage, don't forget to compare the props
    if (this.props.fields !== prevProps.fields) {
      let newState = {section : this.props.fields, editTarget : this.properCase(this.props.editTarget)}
      this.setState(newState)
    }
   }
   properCase = (string) => {
    return string.replace(string[0], string[0].toUpperCase())
   }
   
  render(){
    let input;
    const editFields = Object.keys(this.props.fields).map(field => {
      if (this.props.fields[field][1] === "textarea") {
        input = (
          <textarea
            onChange={this.storeValue}
            type={this.props.fields[field][1]}
            className="form-control"
            id={field}
            value={this.props.fields[field][0] || ""}
          ></textarea>
        );
      } else {
        input = (
          <input
            onChange={this.storeValue}
            type={this.props.fields[field][1]}
            className="form-control"
            id={field}
            value={this.props.fields[field][0] || ""}
          />
        );
      }
      return (
        <div className="form-group" key={field}>
          <label htmlFor={field}>{this.properCase(field)}</label>
          {input}
        </div>
      ) 
    })
    return(
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Edit {this.state.editTarget} </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form onSubmit={(e) => this.props.save(e, this.props.fields)}>
              {editFields}
              <button type="submit" className="btn btn-primary mr-2">Submit</button>
              <button data-dismiss="modal" className="btn btn-secondary">Close</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form