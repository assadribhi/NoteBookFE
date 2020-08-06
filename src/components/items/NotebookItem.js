// Components
// import DeleteButton from "./buttons/DeleteButton";
import { observer } from "mobx-react";

// React
import React from "react";
import { Link } from "react-router-dom";

// Styles
import { NotebookWrapper } from "../../styles";
// import UpdateButton from "./buttons/UpdateButton";

const NotebookItem = ({ notebook }) => {
  return (
    <NotebookWrapper key={notebook.id} className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/notebooks/${notebook.id}`}>
        <p className="notebookName">{notebook.name}</p>
        <p className="notebookAuthor">{notebook.author}</p>
      </Link>

      {/* <UpdateButton notebook={notebook} />
      
      <DeleteButton notebookId={notebook.id} /> */}
    </NotebookWrapper>
  );
};

export default observer(NotebookItem);
