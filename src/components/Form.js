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
    newState.section[e.target.id] = e.target.value;
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
    const editFields = Object.keys(this.props.fields).map(field => {
      return (
        <div className="form-group" key={field}>
          <label htmlFor={field}>{field}</label>
          <input onChange={this.storeValue} type="text" className="formControl" id={field} value={this.state.section[field] || ''} />
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
              <p>Form below</p>
              {editFields}
              <button type="submit">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form