import Header from "./components/Header";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { useState } from "react";
import "@reach/dialog/styles.css";

function App(){
  const [showDialog, setShowDialog] = useState(false);
  const close = () => setShowDialog(false);

  const[editTarget,setEditTarget] = useState('');
  const[formFields,setFormFields] = useState([]);
  const[data,setData] = useState({
    title: {
      name: ["John Doe","text"],
      position: ["Digital Designer","text"],
      imageURL: ["https://i.pravatar.cc/150?img=68","text"],
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
    }
  });

  function edit(target){
    setShowDialog(true)
    setEditTarget(target)
    setFormFields(data[target])
  };
  function save(e, editTarget, formData){
    e.preventDefault();
    setData({...data, [editTarget] : formData})
    setShowDialog(false)
  };

  return (
    <div>
      <Header id="title" title={data.title} edit={edit}/>
      <Form fields={formFields} save={save} editTarget={editTarget} showDialog={showDialog} close={close} />
      <main>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card border-light mb-3" style={{boxShadow: `2px 2px 2px #e9e9e9`}}>
                  <Contact
                    id="contact"
                    edit={edit}
                    contact={data.contact}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card border-light mb-3" style={{boxShadow: `2px 2px 2px #e9e9e9`}}>
                  <Profile
                    id="profile"
                    edit={edit}
                    profile={data.profile}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card border-light mb-3" style={{boxShadow: `2px 2px 2px #e9e9e9`}}>
                  <Education
                    id="education"
                    edit={edit}
                    education={data.education}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card border-light mb-3" style={{boxShadow: `2px 2px 2px #e9e9e9`}}>
                  <Experience
                    id="experience"
                    edit={edit}
                    experience={data.experience}
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

export default App;
