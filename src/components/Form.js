import { Component } from "react"

class Form extends Component{
  render(){
    // const editFields = Object.keys(this.props.targetState).map(prop => {
    //   return <input value={this.props.targetState[prop]} />
    // })
    // console.log(editFields)
    return(
      <form>
        <p>Form below</p>
        {/* {editFields} */}
      </form>
    )
  }
}

export default Form