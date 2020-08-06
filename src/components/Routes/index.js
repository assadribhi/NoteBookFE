import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

// Components
import NoteList from "../../components/lists/NoteList";
import NoteDetail from "../../components/details/NoteDetail";
import NotebookDetail from "../../components/details/NotebookDetail";
import NotebookList from "../../components/lists/NotebookList";
import noteStore from "../../stores/noteStore";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Link to="/notebooks">Welcome</Link>
      </Route>
      <Route path="/notes/:noteId">
        <NoteDetail />
      </Route>
      <Route path="/notebooks/:notebookId/notes">
        <NoteList notes={noteStore.notes} />
      </Route>
      <Route path="/notebooks/:notebookId">
        <NotebookDetail />
      </Route>
      <Route path="/notebooks">
        <NotebookList />
      </Route>
    </Switch>
  );
};

export default Routes;
