import axios from "axios";

// Mobx
import { decorate, observable } from "mobx";

class NotebookStore {
  notebooks = [];
  loading = true;

  fetchNotebooks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = res.data;
      this.loading = false;
    } catch (error) {}
  };

  createNotebook = async (newNotebook) => {
    try {
      const formData = new FormData();
      for (const key in newNotebook) formData.append(key, newNotebook[key]);
      const res = await axios.post("http://localhost:8000/notebooks", formData);
      this.notebooks.push(res.data);
    } catch (error) {}
  };

  //   deleteYard = async (yardId) => {
  //     try {
  //       await axios.delete(`http://localhost:8000/yards/${yardId}`);
  //       this.yards = this.yards.filter((yard) => yard.id !== +yardId);
  //     } catch (error) {}
  //   };

  //   updateYard = async (updatedYard) => {
  //     try {
  //       await axios.put(
  //         `http://localhost:8000/yards/${updatedYard.id}`,
  //         updatedYard
  //       );
  //       const yards = this.yards.find((yard) => yard.id === updatedYard.id);
  //       for (const key in updatedYard) yards[key] = updatedYard[key];
  //     } catch (error) {}
  //   };
}

decorate(NotebookStore, {
  notebooks: observable,
  loading: observable,
});

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();

export default notebookStore;
