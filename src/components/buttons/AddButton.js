import React, { useState } from "react";

import { MdAddCircleOutline } from "react-icons/md";

import NoteModal from "../modals/NoteModal";
import NotebookModal from "../modals/NotebookModal";

const AddButton = ({ notebook }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <MdAddCircleOutline
        className="float-right"
        size="2em"
        onClick={openModal}
      />
      {notebook ? (
        <NoteModal
          isOpen={isOpen}
          closeModal={closeModal}
          notebook={notebook}
        />
      ) : (
        <NotebookModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </>
  );
};

export default AddButton;
