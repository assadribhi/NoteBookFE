import React from "react";

// Components
import NotebookItem from "../items/NotebookItem";
import AddButton from "../buttons/AddButton";

// MobX
import { observer } from "mobx-react";

// Styles
import { ListWrapper } from "../../styles";

// Stores
import notebookStore from "../../stores/notebookStore";

const NotebookList = () => {
  const notebookList = notebookStore.notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} key={notebook.id} />
  ));
  return (
    <div className="container">
      <ListWrapper className="row">{notebookList}</ListWrapper>
      <AddButton />
    </div>
  );
};
export default observer(NotebookList);
