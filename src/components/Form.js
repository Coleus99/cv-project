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
      let newState = {section : this.props.fields}
      this.setState(newState)
    }
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
      <form onSubmit={(e) => this.props.save(e, this.props.fields)}>
        <p>Form below</p>
        {editFields}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form