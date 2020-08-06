// React
import React from "react";

import Routes from "./components/Routes";
import notebookStore from "./stores/notebookStore";
import noteStore from "./stores/noteStore";

// Styles
import { GlobalStyle } from "./styles";

// Theme
import { observer } from "mobx-react";

function App() {
  return (
    <div>
      <GlobalStyle />

      {notebookStore.loading || noteStore.loading ? (
        <h1>Loading</h1>
      ) : (
        <Routes />
      )}
    </div>
  );
}

export default observer(App);
