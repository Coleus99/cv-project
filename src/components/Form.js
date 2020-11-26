import { useEffect, useState } from "react";
import { Dialog } from "@reach/dialog";

const Form = ( {fields, save, editTarget, showDialog, close} ) => {
  const[formData,setFormData] = useState(fields);

  useEffect (() => {
    if (fields) {
      setFormData(fields);
    }
  }, [fields])

  let storeValue = (e) => {
    let dataObject = {}
    dataObject[0]=e.target.value
    dataObject[1]=e.target.type
    setFormData({...formData, [e.target.id] : dataObject })
  }

  let properCase = (string) => {
    return string.replace(string[0], string[0].toUpperCase())
   }

  let input;
  let editFields;
  editFields = Object.keys(formData).map((field, index) => {
    if (formData[field][1] === "textarea") {
      input = (
        <textarea
          onChange={storeValue}
          type={formData[field][1]}
          className="form-control"
          key={index}
          id={field}
          value={formData[field][0] || ""}
        ></textarea>
      );
    } else {
      input = (
        <input
          onChange={storeValue}
          type={formData[field][1]}
          className="form-control"
          key={index}
          id={field}
          value={formData[field][0] || ""}
        />
      );
    }
    return (
      <div className="form-group" key={index}>
        <label htmlFor={field}>{properCase(field)}</label>
        {input}
      </div>
    ) 
  })

  return (
    <Dialog isOpen={showDialog} onDismiss={close}>
      <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">Edit {editTarget} </h5>
          </div>
          <div className="modal-body">
          <form onSubmit={(e) => save(e, editTarget, formData)}>
            {editFields}
            <button type="submit" className="btn btn-primary mr-2">Submit</button>
            <button onClick={close} className="btn btn-secondary">Close</button>
          </form>
          </div>
        </div>
    </Dialog>
  );
}

export default Form