import Header from './components/Header'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Form from './components/Form'
import { Component } from 'react'

function edit(target){
  console.log(target)
}

class App extends Component{
  constructor(){
    super();
    this.state = {
      name: "John Doe",
      age: 50
    }
  }
  render(){
    return(
      <div>
      <Header name="John Smith" edit={edit}/>
      <Form />
      <main>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Contact edit={edit} />
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
