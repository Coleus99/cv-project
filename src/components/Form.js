import { Component } from "react"

class Form extends Component{
  render(){
    console.log('updated')
    const editFields = this.props.fields.map(field => {
      return (
        <div className="form-group">
          <label for={field}>{field}</label>
          <input type="text" className="formControl" id={field} />
        </div>
      ) 
    })
    return(
      <form>
        <p>Form below</p>
        {editFields}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form