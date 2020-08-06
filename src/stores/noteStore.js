import axios from "axios";

// Mobx
import { decorate, observable } from "mobx";

class NoteStore {
  notes = [];
  loading = true;

  fetchNotes = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/notes`);
      this.notes = res.data;
      this.loading = false;
    } catch (error) {}
  };

  getNoteById = (noteId) => {
    return this.notes.find((note) => note.id === noteId);
  };

  createNote = async (newNote, notebook) => {
    try {
      const formData = new FormData();
      for (const key in newNote) formData.append(key, newNote[key]);
      const res = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        formData
      );
      const note = res.data;
      this.note.push(note);
      notebook.note.push({ id: note.id });
    } catch (error) {}
  };

  //   deleteItem = async (equipmentId) => {
  //     try {
  //       await axios.delete(`http://localhost:8000/equipment/${equipmentId}`);
  //       this.equipment = this.equipment.filter(
  //         (equipment) => equipment.id !== +equipmentId
  //       );
  //     } catch (error) {}
  //   };

  //   updateEquipment = async (updatedEquipment) => {
  //     try {
  //       await axios.put(
  //         `http://localhost:8000/equipment/${updatedEquipment.id}`,
  //         updatedEquipment
  //       );
  //       const equipment = this.equipment.find(
  //         (equipment) => equipment.id === updatedEquipment.id
  //       );
  //       for (const key in updatedEquipment)
  //         equipment[key] = updatedEquipment[key];
  //       equipment.image = URL.createObjectURL(updatedEquipment.image);
  //     } catch (error) {}
  //   };
}

decorate(NoteStore, {
  notes: observable,
  loading: observable,
});

const noteStore = new NoteStore();
noteStore.fetchNotes();

export default noteStore;
