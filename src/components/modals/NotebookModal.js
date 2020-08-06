// React
import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import notebookStore from "../../stores/notebookStore";

// Style
import { customStyles, CreateButtonStyled } from "../../styles";

const NotebookModal = ({ isOpen, closeModal, oldNotebook }) => {
  const [notebook, setNotebook] = useState(
    oldNotebook ?? {
      name: "",
      author: "",
    }
  );

  const handleChange = (event) => {
    setNotebook({ ...notebook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notebookStore[oldNotebook ? "updateNotebook" : "createNotebook"](notebook);
    closeModal(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3>{oldNotebook ? "Edit Notebook" : "New Notebook"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              required="required"
              name="name"
              onChange={handleChange}
              value={notebook.name}
            />
          </div>
          <div className="col-6">
            <label>Author</label>
            <input
              className="form-control"
              type="text"
              required="required"
              name="author"
              onChange={handleChange}
              value={notebook.author}
            />
          </div>
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldNotebook ? "Update" : "Add"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default NotebookModal;
