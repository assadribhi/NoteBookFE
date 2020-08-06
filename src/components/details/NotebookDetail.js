// Components
import { Redirect, useParams } from "react-router-dom";
import NoteList from "../lists/NoteList";

// Mobx
import { observer } from "mobx-react";

// React
import React from "react";

// Stores
import notebookStore from "../../stores/notebookStore";
import noteStore from "../../stores/noteStore";

// Styles
import { DetailWrapper } from "../../styles";
// import DeleteButton from "./buttons/DeleteButton";
// import UpdateButton from "./buttons/UpdateButton";
import AddButton from "../buttons/AddButton";

const NotebookDetail = (props) => {
  const { notebookId } = useParams();

  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.id === notebookId
  );
  if (!notebook) return <Redirect to="/notebooks" />;

  let notes = [];
  if (notebook.notes) {
    notes = notebook.notes
      .map((note) => noteStore.getNoteById(note.id))
      .filter((note) => note);
  }

  return (
    <div>
      <DetailWrapper>
        <h1 className="notebookName">{notebook.name} </h1>
        <p className="notebookDescription">{notebook.description} </p>
        {/* <UpdateButton notebook={notebook} />
        <DeleteButton notebookId={notebook.id} /> */}
      </DetailWrapper>

      <NoteList notes={notes} />

      <AddButton notebook={notebook} />
    </div>
  );
};
export default observer(NotebookDetail);
