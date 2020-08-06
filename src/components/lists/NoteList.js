import React from "react";

// Components
import NoteItem from "../items/NotebookItem";

// MobX
import { observer } from "mobx-react";

// Styles
import { ListWrapper } from "../../styles";

const NoteList = ({ notes }) => {
  const noteList = notes.map((note) => <NoteItem note={note} key={note.id} />);
  return (
    <div className="container">
      <ListWrapper className="row">{noteList}</ListWrapper>
    </div>
  );
};
export default observer(NoteList);
