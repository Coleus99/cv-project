import Header from "./components/Header";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      editTarget: "",
      formFields: [],
      title: {
        name: ["John Doe","text"],
        position: ["Digital Designer","text"],
      },
      contact: {
        email: ["john@example.com", "email"],
        phone: ["02736152361", "number"],
      },
      profile: {
        about: [
          "I am a real go-getter. I love using React to build projects.",
          "textarea"
        ]
      },
      education: {
        qualifications:
          ["1st Class Degree in Computer Science. A level Maths and Physics", "textarea"],
      },
      experience: {
        details:
          ["4 years experience as a digital designer, numerous projects built as part of the Odin Project", "textarea"],
      },
    };
  }

  edit = (target) => {
    let newState = this.state;
    newState.editTarget = target;
    newState.formFields = this.state[target];
    this.setState(newState);
  };
  save = (e, data) => {
    e.preventDefault();
    let newState = this.state;
    newState[this.state.editTarget] = data;
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <Header id="title" title={this.state.title} edit={this.edit} />
        <Form fields={this.state.formFields} save={this.save} editTarget={this.state.editTarget}/>
        <main>
          <div className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card border-light mb-3" style={{boxShadow: `2px 2px 2px #e9e9e9`}}>
                    <Contact
                      id="contact"
                      edit={this.edit}
                      contact={this.state.contact}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card border-light mb-3" style={{boxShadow: `2px 2px 2px #e9e9e9`}}>
                    <Profile
                      id="profile"
                      edit={this.edit}
                      profile={this.state.profile}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card border-light mb-3" style={{boxShadow: `2px 2px 2px #e9e9e9`}}>
                    <Education
                      id="education"
                      edit={this.edit}
                      education={this.state.education}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card border-light mb-3" style={{boxShadow: `2px 2px 2px #e9e9e9`}}>
                    <Experience
                      id="experience"
                      edit={this.edit}
                      experience={this.state.experience}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
