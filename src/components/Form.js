import { useEffect, useState } from "react";

const Form = ( {fields, save, editTarget} ) => {
  const[formData,setFormData] = useState(fields);

  useEffect (() => {
    if (fields) {
      setFormData(fields);
    }
  }, [fields])

  let storeValue = (e) => {
    setFormData({...formData, [e.target.id] : [e.target.value]})
  }

  let properCase = (string) => {
    return string.replace(string[0], string[0].toUpperCase())
   }

  let input;
  let editFields;
  editFields = Object.keys(formData).map(field => {
    if (formData[field][1] === "textarea") {
      input = (
        <textarea
          onChange={storeValue}
          type={formData[field][1]}
          className="form-control"
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
          id={field}
          value={formData[field][0] || ""}
        />
      );
    }
    return (
      <div className="form-group" key={field}>
        <label htmlFor={field}>{properCase(field)}</label>
        {input}
      </div>
    ) 
  })

  return(
    <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">Edit {editTarget} </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <form onSubmit={(e) => save(e, editTarget, formData)}>
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

export default Form