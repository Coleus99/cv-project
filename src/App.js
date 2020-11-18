import Header from './components/Header'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Form from './components/Form'
import { Component } from 'react'

class App extends Component{
  constructor(){
    super();
    this.state = {
      formFields : [],
      title: {
        name: "John Doe",
        position: "Digital Designer"
      },
      contact: {
        email: 'john@example.com',
        phone: '02736152361'
      }
    }
  }

  edit = (target) => {
    // console.log(Object.keys(this.state[target]))
    let newState=this.state;
    newState.formFields=Array.from(Object.keys(this.state[target]))
    console.log(newState)
    this.setState(newState)
  }

  // this is more for saving the data
  // edit = (target, data) => {
  //   console.log(target, data)
  //   let newState={};
  //   newState[target]=data
  //   this.setState(newState)
  // }

  render(){
    return(
      <div>
      <Header id="title" title={this.state.title} edit={this.edit}/>
      <Form fields={this.state.formFields} />
      <main>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Contact id="contact" edit={this.edit} contact={this.state.contact} />
              </div>
              <div className="col-sm-8">
                <Profile />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <Education />
              </div>
              <div className="col-sm-8">
                <Experience />
              </div>
            </div>
          </div>
        </div>
      </main> 
      <Footer />
    </div>
    )
  }
}

export default App;
