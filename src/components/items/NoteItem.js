// Components
import { observer } from "mobx-react";

// React
import React from "react";
import { Link } from "react-router-dom";

// Styles
import { NoteWrapper } from "../../styles";
// import DeleteButton from "./buttons/DeleteButton";
// import UpdateButton from "./buttons/UpdateButton";

const NoteItem = ({ note }) => {
  return (
    <NoteWrapper key={note.id} className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/notes/${note.id}`}>
        <p className="noteTitle">{note.title}</p>
        <p className="noteDescription">{note.description}</p>
      </Link>
      {/* <UpdateButton note={note} />
      <DeleteButton noteId={note.id} /> */}
    </NoteWrapper>
  );
};

export default observer(NoteItem);
